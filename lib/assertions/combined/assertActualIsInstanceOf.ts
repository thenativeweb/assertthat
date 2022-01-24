import { AssertionFailed } from '../../errors';
import { assertObjectIsInstanceOfClass } from '../forObjects/assertObjectIsInstanceOfClass';
import { Result } from 'defekt';

const assertActualIsInstanceOf = function (
  actual: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  expected: Function
): Result<undefined, AssertionFailed> {
  return assertObjectIsInstanceOfClass(actual, expected);
};

export {
  assertActualIsInstanceOf
};
