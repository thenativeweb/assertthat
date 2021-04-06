import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isNumberNotTruthy = function (actual: number): Result<undefined, AssertionFailed> {
  if (!truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is truthy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotTruthy
};
