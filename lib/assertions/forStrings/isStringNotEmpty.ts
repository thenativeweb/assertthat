import { AssertionFailed } from '../../errors';
import { empty } from '../../comparisons/forStrings/empty';
import { error, Result, value } from 'defekt';

const isStringNotEmpty = function (actual: string): Result<undefined, AssertionFailed> {
  if (!empty(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is empty.',
    data: {
      actual
    }
  }));
};

export {
  isStringNotEmpty
};
