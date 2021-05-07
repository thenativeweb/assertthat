import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertActualIsNotUndefined = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual !== undefined) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is undefined.'
  }));
};

export {
  assertActualIsNotUndefined
};
