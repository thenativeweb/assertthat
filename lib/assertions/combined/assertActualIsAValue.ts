import { AssertionFailed } from '../../errors';
import { assertResultIsAValue } from '../forResults/assertResultIsAValue';
import { Result } from 'defekt';

// eslint-disable-next-line @typescript-eslint/naming-convention
const assertActualIsAValue = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  return assertResultIsAValue(actual);
};

export {
  assertActualIsAValue
};
