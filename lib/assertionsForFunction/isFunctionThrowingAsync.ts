import { AssertionFailed } from '../errors';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionThrowingAsync = async function <TError extends Error = Error> (
  actual: Function,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Promise<Result<undefined, AssertionFailed>> {
  try {
    const promise = actual();

    if (!(promise instanceof Promise)) {
      return error(new AssertionFailed({
        message: 'The function did not return a Promise.'
      }));
    }

    await promise;
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
        message: 'The function threw an unexpected asynchronous exception.',
        data: {
          expected: `The message should have matched:\n${expected.toString()}`,
          actual: `Error message:\n${ex.message}`
        }
      }));
    }
    if (typeof expected === 'function') {
      if (expected(ex)) {
        return value();
      }

      return error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        data: {
          expected: `The exception should have fulfilled a predicate.`,
          actual: `Error message:\n${ex.message}`
        }
      }));
    }

    if (ex.message === expected) {
      return value();
    }

    return error(new AssertionFailed({
      message: 'The function threw an unexpected asynchronous exception.',
      data: {
        expected: `The message should have been:\n${expected}`,
        actual: `Error message:\n${ex.message}`
      }
    }));
  }

  return error(new AssertionFailed({
    message: 'The function did not throw an asynchronous exception.'
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionThrowingAsync
};
