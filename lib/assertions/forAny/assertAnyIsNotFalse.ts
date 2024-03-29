import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertAnyIsNotFalse = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual !== false) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is false.'
  }));
};

export {
  assertAnyIsNotFalse
};
