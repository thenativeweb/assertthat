import chalk from 'chalk';
import { NumberDiff } from '../../diffs/forNumbers/NumberDiff';
import { oneLine } from 'common-tags';
import { prettyPrintNumber } from './prettyPrintNumber';

const prettyPrintNumberDiff = function (diff: NumberDiff): string {
  return oneLine`
    ${diff.actual !== undefined ? chalk.red(prettyPrintNumber(diff.actual)) : ''}
    ${diff.expected !== undefined ? chalk.green(prettyPrintNumber(diff.expected)) : ''} (${prettyPrintNumber(diff.difference)})
  `;
};

export {
  prettyPrintNumberDiff
};
