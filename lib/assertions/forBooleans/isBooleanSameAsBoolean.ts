import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isBooleanSameAsBoolean = function (
  actual: boolean,
  expected: boolean
): Result<undefined, AssertionFailed> {
  if (sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The booleans are not the same.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanSameAsBoolean
};
