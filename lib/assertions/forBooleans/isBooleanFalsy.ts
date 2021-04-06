import { AssertionFailed } from '../../errors';
import { falsy } from '../../comparisons/forAny/falsy';
import { error, Result, value } from 'defekt';

const isBooleanFalsy = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (falsy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is not falsy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanFalsy
};
