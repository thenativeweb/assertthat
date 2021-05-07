import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertSetIsNotEmpty = function <TContent>(
  actual: Set<TContent>
): Result<undefined, AssertionFailed> {
  if (actual.size > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The set is empty.'
  }));
};

export {
  assertSetIsNotEmpty
};
