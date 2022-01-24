import { AssertionFailed } from '../../errors';
import { assertResultIsAnErrorWithMessage } from '../forResults/assertResultIsAnErrorWithMessage';
import { Result } from 'defekt';

const assertActualIsAnErrorWithMessage = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertResultIsAnErrorWithMessage(actual, expected);
};

export {
  assertActualIsAnErrorWithMessage
};
