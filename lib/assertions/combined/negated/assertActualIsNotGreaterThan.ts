import { AssertionFailed } from '../../../errors';
import { assertNumberIsNotGreaterThanNumber } from '../../forNumbers/assertNumberIsNotGreaterThanNumber';
import { Result } from 'defekt';

const assertActualIsNotGreaterThan = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsNotGreaterThanNumber(actual, expected);
};

export {
  assertActualIsNotGreaterThan
};
