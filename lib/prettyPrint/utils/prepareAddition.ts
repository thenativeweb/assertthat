import chalk from 'chalk';
import { maximumDepth } from '../../constants/maximumDepth';

const prepareAddition = function (content: string, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumDepth) {
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
