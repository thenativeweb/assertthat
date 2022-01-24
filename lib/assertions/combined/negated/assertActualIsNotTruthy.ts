import { assertAnyIsNotTruthy } from '../../forAny/assertAnyIsNotTruthy';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotTruthy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotTruthy(actual);
};

export {
  assertActualIsNotTruthy
};
