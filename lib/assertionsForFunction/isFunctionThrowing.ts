import { AssertionFailed } from '../errors';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionThrowing = function <TError extends Error = Error> (actual: Function, expected?: string | RegExp | ((ex: TError) => boolean)): Result<undefined, AssertionFailed> {
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
        data: {
          formattedMessage: stripIndent`
            The function threw an unexpected exception.
            Expected the message to match: ${expected.toString()}
            Actual message: ${ex.message}
          `
        }
      }));
    }
    if (typeof expected === 'function') {
      if (expected(ex)) {
        return value();
      }

      return error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        data: {
          formattedMessage: stripIndent`
            The function threw an unexpected exception.
            Expected the exception to fulfil a predicate.
            Actual message: ${ex.message}
          `
        }
      }));
    }

    if (ex.message === expected) {
      return value();
    }

    return error(new AssertionFailed({
      message: 'The function threw an unexpected exception.',
      data: {
        formattedMessage: stripIndent`
          The function threw an unexpected exception.
          Expected the message to be: ${expected}
          Actual message: ${ex.message}
        `
      }
    }));
  }

  return error(new AssertionFailed({
    message: 'The function did not throw an exception.',
    data: {
      formattedMessage: 'The function did not throw an exception.'
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionThrowing
};
