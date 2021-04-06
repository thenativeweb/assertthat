import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { error, Result, value } from 'defekt';

const isBooleanEqualToBoolean = function (
  actual: boolean,
  expected: boolean
): Result<undefined, AssertionFailed> {
  if (sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The booleans are not equal.',
    data: {
      expected: `${expected}`,
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanEqualToBoolean
};
