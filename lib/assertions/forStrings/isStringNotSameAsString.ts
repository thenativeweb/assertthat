import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isStringNotSameAsString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The strings are the same.',
    data: {
      expected,
      actual
    }
  }));
};

export {
  isStringNotSameAsString
};
