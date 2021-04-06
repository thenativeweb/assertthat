import { AssertionFailed } from '../../errors';
import { empty } from '../../comparisons/forStrings/empty';
import { error, Result, value } from 'defekt';

const isStringEmpty = function (actual: string): Result<undefined, AssertionFailed> {
  if (empty(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not empty.',
    data: {
      actual
    }
  }));
};

export {
  isStringEmpty
};
