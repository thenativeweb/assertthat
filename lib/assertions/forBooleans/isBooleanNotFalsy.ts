import { AssertionFailed } from '../../errors';
import { falsy } from '../../comparisons/forAny/falsy';
import { error, Result, value } from 'defekt';

const isBooleanNotFalsy = function (actual: boolean): Result<undefined, AssertionFailed> {
  if (!falsy(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is falsy.',
    data: {
      actual: `${actual}`
    }
  }));
};

export {
  isBooleanNotFalsy
};
