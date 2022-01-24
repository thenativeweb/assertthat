import { assertAnyIsSameJsonAsExpected } from '../forAny/assertAnyIsSameJsonAsExpected';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsSameJsonAs = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsSameJsonAsExpected(actual, expected);
};

export {
  assertActualIsSameJsonAs
};
