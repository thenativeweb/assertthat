import chalk from 'chalk';
import { propagateDiffSymbols } from './prettyPrint/utils/propagateDiffSymbols';
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
  // Some test libraries (e.g. mocha) print the errors thrown in tests in red.
  // Since our diff makes use of color, we want to guarantee that our error
  // message is displayed as intended. To achieve this, we reset all color in
  // the beginning.
  let errorMessage = chalk.reset(message);

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
    errorMessage += `\n\n${source`
      --- DIFF ------------
      ${chalk.green('+++ must be added')}
      ${chalk.red('--- must be removed')}
    `}\n${propagateDiffSymbols(source`
      *** contains changes

        ${diff}
    `)}`;
  }

  return errorMessage;
};

export {
  formatErrorMessage
};
