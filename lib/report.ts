import { AssertionFailed } from './errors';
import { formatErrorMessage } from './formatErrorMessage';
import { Result } from 'defekt';

const report = function (result: Result<any, AssertionFailed>): void {
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
  report
};
