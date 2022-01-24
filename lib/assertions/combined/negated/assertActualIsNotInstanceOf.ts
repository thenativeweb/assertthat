import { AssertionFailed } from '../../../errors';
import { assertObjectIsNotInstanceOfClass } from '../../forObjects/assertObjectIsNotInstanceOfClass';
import { Result } from 'defekt';

const assertActualIsNotInstanceOf = function (
  actual: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  expected: Function
): Result<undefined, AssertionFailed> {
  return assertObjectIsNotInstanceOfClass(actual, expected);
};

export {
  assertActualIsNotInstanceOf
};
