import chalk from 'chalk';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';

const prepareAddition = function (content: string, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumFormattingDepth) {
          return chalk.red(line);
        }
        if (index !== 0) {
          return chalk.red(`  ${line}`);
        }

        return chalk.red(`- ${line}`);
      }
    );
};

export {
  prepareAddition
};
