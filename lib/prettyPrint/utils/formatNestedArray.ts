import { InvalidOperation } from '../../errors';
import { stripIndentTransformer, TemplateTag, TemplateTransformer, trimResultTransformer } from 'common-tags';

const nestedInlineArrayTransformer = function (): TemplateTransformer {
  return {
    onSubstitution (substitution, resultSoFar): string {
      if (!Array.isArray(substitution)) {
        throw new InvalidOperation('Values formatted using the nested inline array transformer must be nested arrays.');
      }

      const lastSeparatorIndex = substitution.length - 2;
      const indentationMatch = /\n(?<indentation>[^\S\n]+)$/u.exec(resultSoFar);

      return substitution.reduce((result, part, index): string => {
        if (!Array.isArray(part)) {
          throw new InvalidOperation('Values formatted using the nested inline array transformer must be nested arrays.');
        }
        const isFirstPart = index === 0;

        let next = '';

        // If there is no indentation, we want to display the array parts
        // inline. Thus, no newline, just a space to separate the parts.
        next += isFirstPart ? '' : `${result}${indentationMatch ? '\n' : ' '}`;

        part.forEach((subPart: string, subIndex: number): void => {
          const isFirstSubPart = subIndex === 0;
          const isLastSubPart = subIndex === part.length - 1;
          const firstPartOverall = isFirstPart && isFirstSubPart;

          if (indentationMatch && !firstPartOverall) {
            next += indentationMatch.groups?.indentation ?? '';
          }
          next += subPart;

          if (!isLastSubPart) {
            if (indentationMatch) {
              next += '\n';
            } else {
              // If there is no indentation, we want to display the array parts
              // inline. Thus, no newline, just a space to separate the
              // sub-parts.
              next += ' ';
            }
          }
        });

        next += index <= lastSeparatorIndex ? ',' : '';

        return next;
      }, '');
    }
  };
};

const formatNestedArray = new TemplateTag([
  nestedInlineArrayTransformer(),
  stripIndentTransformer(),
  trimResultTransformer()
]);

export {
  formatNestedArray
};
