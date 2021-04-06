import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isNumberTruthy = function (actual: number): Result<undefined, AssertionFailed> {
  if (truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is not truthy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isNumberTruthy
};
