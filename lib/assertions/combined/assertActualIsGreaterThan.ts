import { AssertionFailed } from '../../errors';
import { assertNumberIsGreaterThanNumber } from '../forNumbers/assertNumberIsGreaterThanNumber';
import { Result } from 'defekt';

const assertActualIsGreaterThan = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsGreaterThanNumber(actual, expected);
};

export {
  assertActualIsGreaterThan
};
