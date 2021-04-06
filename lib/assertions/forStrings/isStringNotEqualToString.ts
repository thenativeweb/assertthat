import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isStringNotEqualToString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The strings are equal.',
    data: {
      expected,
      actual
    }
  }));
};

export {
  isStringNotEqualToString
};
