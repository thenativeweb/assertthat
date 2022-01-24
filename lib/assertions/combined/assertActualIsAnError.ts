import { AssertionFailed } from '../../errors';
import { assertResultIsAnError } from '../forResults/assertResultIsAnError';
import { Result } from 'defekt';

const assertActualIsAnError = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  return assertResultIsAnError(actual);
};

export {
  assertActualIsAnError
};
