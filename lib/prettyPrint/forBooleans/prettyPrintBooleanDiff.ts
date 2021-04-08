import { BooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import chalk from 'chalk';
import { oneLine } from 'common-tags';
import { prettyPrintBoolean } from './prettyPrintBoolean';

const prettyPrintBooleanDiff = function (diff: BooleanDiff): string {
  return oneLine`
    ${diff.actual ? chalk.green(prettyPrintBoolean(diff.actual)) : ''}
    ${diff.expected ? chalk.red(prettyPrintBoolean(diff.expected)) : ''}
  `;
};

export {
  prettyPrintBooleanDiff
};
