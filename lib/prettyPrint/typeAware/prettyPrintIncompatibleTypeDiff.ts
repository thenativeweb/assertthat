import chalk from 'chalk';
import { IncompatibleTypeDiff } from 'lib/diffs/IncompatibleTypeDiff';
import { oneLine } from 'common-tags';
import { prettyPrint } from './prettyPrint';

const prettyPrintIncompatibleTypeDiff = function (
  incompatibleTypeDiff: IncompatibleTypeDiff,
  depth = 0
): string {
  return oneLine`
    ${chalk.green(prettyPrint(incompatibleTypeDiff.actual, depth + 1))}
    ${chalk.red(prettyPrint(incompatibleTypeDiff.expected, depth + 1))}
  `;
};

export {
  prettyPrintIncompatibleTypeDiff
};
