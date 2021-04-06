import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isNumberNotEqualToNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The numbers are equal.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotEqualToNumber
};
