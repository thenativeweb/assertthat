import { maximumDepth } from '../../constants/maximumDepth';

const prepareSimple = function (content: string, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line): string => {
        if (depth >= maximumDepth) {
          return line;
        }

        return `  ${line}`;
      }
    );
};

export {
  prepareSimple
};
