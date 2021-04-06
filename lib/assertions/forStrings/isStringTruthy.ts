import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isStringTruthy = function (actual: string): Result<undefined, AssertionFailed> {
  if (truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not truthy.',
    data: {
      actual
    }
  }));
};

export {
  isStringTruthy
};
