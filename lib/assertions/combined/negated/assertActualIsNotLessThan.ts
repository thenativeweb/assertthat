import { AssertionFailed } from '../../../errors';
import { assertNumberIsNotLessThanNumber } from '../../forNumbers/assertNumberIsNotLessThanNumber';
import { Result } from 'defekt';

const assertActualIsNotLessThan = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsNotLessThanNumber(actual, expected);
};

export {
  assertActualIsNotLessThan
};
