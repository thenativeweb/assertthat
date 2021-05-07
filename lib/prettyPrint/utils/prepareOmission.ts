import chalk from 'chalk';
import { maximumDepth } from '../../constants/maximumDepth';

const prepareOmission = function (content: any, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumDepth) {
          return chalk.green(line);
        }
        if (index !== 0) {
          return chalk.green(`  ${line}`);
        }

        return chalk.green(`+ ${line}`);
      }
    );
};

export {
  prepareOmission
};
