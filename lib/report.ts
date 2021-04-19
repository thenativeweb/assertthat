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

const wrapAssertionInReport = function (
  assertion: (...args: any[]) => Result<undefined, AssertionFailed>
): () => void {
  console.log('assertion was wrapped');
  return function (...args): void {
    console.log('wrapped assertion is called', { args });
    report(assertion(...args));
  };
};

const wrapAssertionInAsyncReport = function (
  assertion: (...args: any[]) => Promise<Result<undefined, AssertionFailed>>
): () => Promise<void> {
  return async function (...args): Promise<void> {
    report(await assertion(...args));
  };
};

export {
  report,
  wrapAssertionInAsyncReport,
  wrapAssertionInReport
};
