import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertMapIsEmpty = function <TKey, TValue>(
  actual: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  if (actual.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The map is not empty.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertMapIsEmpty
};
