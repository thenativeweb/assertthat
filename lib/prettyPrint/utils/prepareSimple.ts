import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';

const prepareSimple = function (content: string, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line): string => {
        if (depth >= maximumFormattingDepth) {
          return line;
        }

        return `  ${line}`;
      }
    );
};

export {
  prepareSimple
};
