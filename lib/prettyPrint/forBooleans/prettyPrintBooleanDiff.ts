import { BooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import chalk from 'chalk';
import { oneLine } from 'common-tags';
import { prettyPrintBoolean } from './prettyPrintBoolean';

const prettyPrintBooleanDiff = function (diff: BooleanDiff): string {
  return oneLine`
    ${diff.actual !== undefined ? chalk.red(prettyPrintBoolean(diff.actual)) : ''}
    ${diff.expected !== undefined ? chalk.green(prettyPrintBoolean(diff.expected)) : ''}
  `;
};

export {
  prettyPrintBooleanDiff
};
