import { AssertionFailed } from '../../../errors';
import { assertObjectIsNotInstanceOfClass } from '../../forObjects/assertObjectIsNotInstanceOfClass';
import { Result } from 'defekt';

const assertActualIsNotInstanceOf = function (
  actual: object,
  expected: (...args: any[]) => any
): Result<undefined, AssertionFailed> {
  return assertObjectIsNotInstanceOfClass(actual, expected);
};

export {
  assertActualIsNotInstanceOf
};
