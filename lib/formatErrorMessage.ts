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
    errorMessage += `\n\n${source`
      --- DIFF ------------

        ${diff}
    `}`;
  }

  return errorMessage;
};

export {
  formatErrorMessage
};
