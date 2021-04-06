import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isNumberNotSameAsNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The numbers are the same.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotSameAsNumber
};
