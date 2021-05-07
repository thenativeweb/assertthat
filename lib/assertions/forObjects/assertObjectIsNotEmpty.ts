import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertObjectIsNotEmpty = function (
  actual: object
): Result<undefined, AssertionFailed> {
  if (Object.keys(actual).length > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The object is empty.'
  }));
};

export {
  assertObjectIsNotEmpty
};
