import { AssertionFailed } from '../../errors';
import { isNan } from '../../comparisons/forNumbers/isNan';
import { error, Result, value } from 'defekt';

const isNumberNotNan = function (actual: number): Result<undefined, AssertionFailed> {
  if (!isNan(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is NaN.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotNan
};
