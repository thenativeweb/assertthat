import { AssertionFailed } from '../../errors';
import { assertNumberIsLessThanNumber } from '../forNumbers/assertNumberIsLessThanNumber';
import { Result } from 'defekt';

const assertActualIsLessThan = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsLessThanNumber(actual, expected);
};

export {
  assertActualIsLessThan
};
