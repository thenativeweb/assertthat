import { AssertionFailed } from '../../errors';
import { falsy } from '../../comparisons/forAny/falsy';
import { error, Result, value } from 'defekt';

const isNumberFalsy = function (actual: number): Result<undefined, AssertionFailed> {
  if (falsy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is not falsy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isNumberFalsy
};
