import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertStringIsNotEmpty = function (
  actual: string
): Result<undefined, AssertionFailed> {
  if (actual.length > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is empty.'
  }));
};

export {
  assertStringIsNotEmpty
};
