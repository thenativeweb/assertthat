import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isBooleanNotTruthy = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (!truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is truthy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanNotTruthy
};
