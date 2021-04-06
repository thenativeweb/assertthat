import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isStringNotTruthy = function (actual: string): Result<undefined, AssertionFailed> {
  if (!truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is truthy.',
    data: {
      actual
    }
  }));
};

export {
  isStringNotTruthy
};
