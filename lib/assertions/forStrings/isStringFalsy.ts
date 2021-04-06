import { AssertionFailed } from '../../errors';
import { falsy } from '../../comparisons/forAny/falsy';
import { error, Result, value } from 'defekt';

const isStringFalsy = function (actual: string): Result<undefined, AssertionFailed> {
  if (falsy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not falsy.',
    data: {
      actual
    }
  }));
};

export {
  isStringFalsy
};
