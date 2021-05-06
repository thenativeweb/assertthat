import chalk from 'chalk';
import { IncompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { oneLine } from 'common-tags';
import { prettyPrint } from './prettyPrint';

const prettyPrintIncompatibleTypeDiff = function (
  incompatibleTypeDiff: IncompatibleTypeDiff,
  depth = 0
): string {
  return oneLine`
    ${chalk.red(prettyPrint(incompatibleTypeDiff.actual, depth + 1))}
    ${chalk.green(prettyPrint(incompatibleTypeDiff.expected, depth + 1))}
  `;
};

export {
  prettyPrintIncompatibleTypeDiff
};
