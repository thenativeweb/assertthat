import { AssertionFailed } from '../../errors';
import { falsy } from '../../comparisons/forAny/falsy';
import { error, Result, value } from 'defekt';

const isStringNotFalsy = function (actual: string): Result<undefined, AssertionFailed> {
  if (!falsy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is falsy.',
    data: {
      actual
    }
  }));
};

export {
  isStringNotFalsy
};
