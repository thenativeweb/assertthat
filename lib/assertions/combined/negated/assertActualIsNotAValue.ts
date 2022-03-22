import { AssertionFailed } from '../../../errors';
import { assertResultIsNotAValue } from '../../forResults/assertResultIsNotAValue';
import { Result } from 'defekt';

// eslint-disable-next-line @typescript-eslint/naming-convention
const assertActualIsNotAValue = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  return assertResultIsNotAValue(actual);
};

export {
  assertActualIsNotAValue
};
