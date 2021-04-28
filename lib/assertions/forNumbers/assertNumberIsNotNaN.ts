import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertNumberIsNotNaN = function (
  actual: number
): Result<undefined, AssertionFailed> {
  if (!Number.isNaN(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is NaN.'
  }));
};

export {
  assertNumberIsNotNaN
};
