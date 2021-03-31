import { AssertionFailed } from '../errors';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotThrowingAsync = async function <TError extends Error = Error> (
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
      return error(new AssertionFailed({
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Actual message: ${ex.message}
        `
      }));
    }

    if (expected instanceof RegExp && expected.test(ex.message)) {
      return error(new AssertionFailed({
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Expected the message not to match: ${expected.toString()}
          Actual message: ${ex.message}
        `
      }));
    }
    if (typeof expected === 'function' && expected(ex)) {
      return error(new AssertionFailed({
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Expected the exception not to fulfil a predicate.
          Actual message: ${ex.message}
        `
      }));
    }

    if (typeof expected === 'string' && ex.message === expected) {
      return error(new AssertionFailed({
        message: stripIndent`
          The function threw an unexpected asynchronous exception.

          Expected the message not to be: ${expected}
          Actual message: ${ex.message}
        `
      }));
    }
  }

  return value();
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotThrowingAsync
};
