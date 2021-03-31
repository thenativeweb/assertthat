import { AssertionFailed } from '../errors';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotThrowing = function <TError extends Error = Error> (actual: Function, expected?: string | RegExp | ((ex: TError) => boolean)): Result<undefined, AssertionFailed> {
  try {
    actual();
  // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
  } catch (ex: any) {
    if (expected === undefined) {
      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        data: {
          actual: `Error message:\n${ex.message}`
        }
      }));
    }

    if (expected instanceof RegExp && expected.test(ex.message)) {
      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        data: {
          expected: `The message should not have matched:\n${expected.toString()}`,
          actual: `Error message:\n${ex.message}`
        }
      }));
    }
    if (typeof expected === 'function' && expected(ex)) {
      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        data: {
          expected: `The exception should not have fulfilled a predicate.`,
          actual: `Error message:\n${ex.message}`
        }
      }));
    }

    if (typeof expected === 'string' && ex.message === expected) {
      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        data: {
          expected: `The message should not have been:\n${expected}`,
          actual: `Error message:\n${ex.message}`
        }
      }));
    }
  }

  return value();
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotThrowing
};
