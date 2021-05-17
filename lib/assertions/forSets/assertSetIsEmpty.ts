import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsEmpty = function <TContent>(
  actual: Set<TContent>
): Result<undefined, AssertionFailed> {
  if (actual.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The set is not empty.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertSetIsEmpty
};
