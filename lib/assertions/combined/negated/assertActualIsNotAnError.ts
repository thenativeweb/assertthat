import { AssertionFailed } from '../../../errors';
import { assertResultIsNotAnError } from '../../forResults/assertResultIsNotAnError';
import { Result } from 'defekt';

const assertActualIsNotAnError = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  return assertResultIsNotAnError(actual);
};

export {
  assertActualIsNotAnError
};
