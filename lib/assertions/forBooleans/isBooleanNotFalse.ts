import { AssertionFailed } from '../../errors';
import { isFalse } from '../../comparisons/forBooleans/isFalse';
import { error, Result, value } from 'defekt';

const isBooleanNotFalse = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (!isFalse(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is false.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanNotFalse
};
