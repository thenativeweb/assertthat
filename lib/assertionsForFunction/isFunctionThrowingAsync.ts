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
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Expected the message to match: ${expected.toString()}
          Actual message: ${ex.message}
        `
      }));
    }
    if (typeof expected === 'function') {
      if (expected(ex)) {
        return value();
      }

      return error(new AssertionFailed({
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Expected the exception to fulfil a predicate.
          Actual message: ${ex.message}
        `
      }));
    }

    if (ex.message === expected) {
      return value();
    }

    return error(new AssertionFailed({
      message: stripIndent`
        The function threw an unexpected asynchronous exception.

        Expected the message to be: ${expected}
        Actual message: ${ex.message}
      `
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
