import { AssertionFailed } from '../../errors';
import { atLeast } from '../../comparisons/forNumbers/atLeast';
import { error, Result, value } from 'defekt';

const isNumberAtLeastNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (atLeast(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is not at least the expected value.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberAtLeastNumber
};
