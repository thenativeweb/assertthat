import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertActualIsNotTrue = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual !== true) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is true.'
  }));
};

export {
  assertActualIsNotTrue
};
