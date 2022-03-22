import { AssertionFailed } from '../../../errors';
import { assertResultIsNotAnErrorWithMessage } from '../../forResults/assertResultIsNotAnErrorWithMessage';
import { Result } from 'defekt';

const assertActualIsNotAnErrorWithMessage = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertResultIsNotAnErrorWithMessage(actual, expected);
};

export {
  assertActualIsNotAnErrorWithMessage
};
