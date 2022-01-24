import { assertAnyIsNotSameJsonAsExpected } from '../../forAny/assertAnyIsNotSameJsonAsExpected';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotSameJsonAs = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotSameJsonAsExpected(actual, expected);
};

export {
  assertActualIsNotSameJsonAs
};
