import { AssertionFailed } from '../../errors';
import { truthy } from '../../comparisons/forAny/truthy';
import { error, Result, value } from 'defekt';

const isBooleanTruthy = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (truthy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is not truthy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanTruthy
};
