import { AssertionFailed } from '../../errors';
import { lessThan } from '../../comparisons/forNumbers/lessThan';
import { error, Result, value } from 'defekt';

const isNumberNotLessThanNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!lessThan(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is less than the expected value.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotLessThanNumber
};
