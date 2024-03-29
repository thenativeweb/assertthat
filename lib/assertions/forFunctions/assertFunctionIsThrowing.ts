import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertFunctionIsThrowing = function <TError extends Error = Error> (
  actual: (...args: any[]) => any,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Result<undefined, AssertionFailed> {
  try {
    actual();
  // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
  } catch (ex: any) {
    if (expected === undefined) {
      return value();
    }

    if (expected instanceof RegExp) {
      if (expected.test(ex.message)) {
        return value();
      }

      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: `The message should have matched:\n${expected.toString()}`,
        actual: `Error message:\n${ex.message}`
      }));
    }
    if (typeof expected === 'function') {
      if (expected(ex)) {
        return value();
      }

      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: `The exception should have fulfilled a predicate.`,
        actual: `Error message:\n${ex.message}`
      }));
    }

    if (ex.message === expected) {
      return value();
    }

    return error(new AssertionFailed({
      message: 'The function threw an unexpected exception.',
      expected: `The message should have been:\n${expected}`,
      actual: `Error message:\n${ex.message}`
    }));
  }

  return error(new AssertionFailed({
    message: 'The function did not throw an exception.'
  }));
};

export {
  assertFunctionIsThrowing
};
