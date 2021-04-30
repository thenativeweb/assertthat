import { InvalidOperation } from '../../errors';
import { stripIndentTransformer, TemplateTag, TemplateTransformer, trimResultTransformer } from 'common-tags';

const twoDimensionalArrayTransformer = function (): TemplateTransformer {
  return {
    onSubstitution (substitution, resultSoFar): string {
      if (!Array.isArray(substitution)) {
        throw new InvalidOperation('Values formatted using the nested inline array transformer must be nested arrays.');
      }

      const lastSeparatorIndex = substitution.length - 2;
      const indentationMatch = /\n(?<indentation>[^\S\n]+)$/u.exec(resultSoFar);

      let endResult = '';

      for (const [ index, part ] of substitution.entries()) {
        if (!Array.isArray(part)) {
          throw new InvalidOperation('Values formatted using the nested inline array transformer must be nested arrays.');
        }
        const isFirstPart = index === 0;

        // If there is no indentation, we want to display the array parts
        // inline. Thus, no newline, just a space to separate the parts.
        endResult += isFirstPart ? '' : `${indentationMatch ? '\n' : ' '}`;

        for (const [ subIndex, subPart ] of part.entries()) {
          const isLastSubPart = subIndex === part.length - 1;
          const firstStringOverall = isFirstPart && subIndex === 0;

          // The first part of the entire substitution does not need an
          // indentation, since it is already indented in the enclosing template
          // string. That is where the indentation match comes from.
          if (indentationMatch && !firstStringOverall) {
            endResult += indentationMatch.groups?.indentation ?? '';
          }

          endResult += subPart;

          if (!isLastSubPart) {
            if (indentationMatch) {
              endResult += '\n';
            } else {
              // If there is no indentation, we want to display the array parts
              // inline. Thus, no newline, just a space to separate the
              // sub-parts.
              endResult += ' ';
            }
          }
        }

        if (index <= lastSeparatorIndex) {
          endResult += ',';
        }
      }

      return endResult;
    }
  };
};

const formatNestedArray = new TemplateTag([
  twoDimensionalArrayTransformer(),
  stripIndentTransformer(),
  trimResultTransformer()
]);

export {
  formatNestedArray
};
