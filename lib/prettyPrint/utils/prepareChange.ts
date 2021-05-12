import chalk from 'chalk';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';

const prepareChange = function (content: string, depth: number): string [] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumFormattingDepth) {
          return line;
        }
        if (index !== 0) {
          return `  ${line}`;
        }

        return `${chalk.yellow('* ')}${line}`;
      }
    );
};

export {
  prepareChange
};
