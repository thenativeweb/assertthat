import chalk from 'chalk';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';

const prepareOmission = function (content: any, depth: number): string[] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumFormattingDepth) {
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
