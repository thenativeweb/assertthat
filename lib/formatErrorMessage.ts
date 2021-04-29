import chalk from 'chalk';
import { diffString } from './prettyPrint/utils/diffString';
import { source } from 'common-tags';

const formatErrorMessage = function ({
  message,
  expected,
  actual,
  diff
}: {
  message: string;
  expected?: string;
  actual?: string;
  diff?: string;
}): string {
  let errorMessage = message;

  if (expected) {
    errorMessage += `\n\n${source`
      --- EXPECTED --------

        ${expected}
    `}`;
  }
  if (actual) {
    errorMessage += `\n\n${source`
      --- ACTUAL ----------

        ${actual}
    `}`;
  }
  if (diff) {
    errorMessage += `\n\n${diffString`
      --- DIFF ------------
      ${chalk.red('--- needs to be removed')}
      ${chalk.green('+++ is missing')}
      *** changes in nested elements

        ${diff}
    `}`;
  }

  return errorMessage;
};

export {
  formatErrorMessage
};
