import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertMapIsNotEmpty = function <TKey, TValue>(
  actual: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  if (actual.size > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The map is empty.'
  }));
};

export {
  assertMapIsNotEmpty
};
