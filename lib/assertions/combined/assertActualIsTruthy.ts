import { assertAnyIsTruthy } from '../forAny/assertAnyIsTruthy';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsTruthy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsTruthy(actual);
};

export {
  assertActualIsTruthy
};
