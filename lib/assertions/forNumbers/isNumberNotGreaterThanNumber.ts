import { AssertionFailed } from '../../errors';
import { greaterThan } from '../../comparisons/forNumbers/greaterThan';
import { error, Result, value } from 'defekt';

const isNumberNotGreaterThanNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!greaterThan(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is greater than the expected value.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotGreaterThanNumber
};
