import { AssertionFailed } from '../../errors';
import { isNan } from '../../comparisons/forNumbers/isNan';
import { error, Result, value } from 'defekt';

const isNumberNan = function (actual: number): Result<undefined, AssertionFailed> {
  if (isNan(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is not NaN.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNan
};
