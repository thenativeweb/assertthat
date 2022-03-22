import { assertAnyIsNotEqualToExpected } from '../../forAny/assertAnyIsNotEqualToExpected';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotEqualTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotEqualToExpected(actual, expected);
};

export {
  assertActualIsNotEqualTo
};
