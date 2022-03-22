import { AssertionFailed } from '../../errors';
import { assertObjectIsInstanceOfClass } from '../forObjects/assertObjectIsInstanceOfClass';
import { Result } from 'defekt';

const assertActualIsInstanceOf = function (
  actual: object,
  expected: (...args: any[]) => any
): Result<undefined, AssertionFailed> {
  return assertObjectIsInstanceOfClass(actual, expected);
};

export {
  assertActualIsInstanceOf
};
