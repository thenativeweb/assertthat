import { assertAnyIsEqualToExpected } from '../forAny/assertAnyIsEqualToExpected';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsEqualTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsEqualToExpected(actual, expected);
};

export {
  assertActualIsEqualTo
};
