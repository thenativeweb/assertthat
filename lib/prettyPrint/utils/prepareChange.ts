import chalk from 'chalk';
import { maximumDepth } from '../../constants/maximumDepth';

const prepareChange = function (content: string, depth: number): string [] {
  return `${content}`.
    split('\n').
    map(
      (line, index): string => {
        if (depth >= maximumDepth) {
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
