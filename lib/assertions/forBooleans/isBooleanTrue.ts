import { AssertionFailed } from '../../errors';
import { isTrue } from '../../comparisons/forBooleans/isTrue';
import { error, Result, value } from 'defekt';

const isBooleanTrue = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (isTrue(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is not true.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanTrue
};
