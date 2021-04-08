import { AssertionFailed2 } from './errors';
import { formatErrorMessage } from './formatErrorMessage';
import { Result } from 'defekt';

const report2 = function (result: Result<any, AssertionFailed2>): void {
  if (result.hasValue()) {
    return;
  }

  throw new Error(formatErrorMessage({
    message: result.error.message,
    expected: result.error.data.expected,
    actual: result.error.data.actual,
    diff: result.error.data.diff
  }));
};

export {
  report2
};
