import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertArrayIsNotEmpty = function <TContent>(
  actual: TContent[]
): Result<undefined, AssertionFailed> {
  if (actual.length > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The array is empty.'
  }));
};

export {
  assertArrayIsNotEmpty
};
