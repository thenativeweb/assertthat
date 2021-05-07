import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertActualIsNotNull = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual !== null) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is null.'
  }));
};

export {
  assertActualIsNotNull
};
