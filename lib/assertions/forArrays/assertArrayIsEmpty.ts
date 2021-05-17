import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsEmpty = function <TContent>(
  actual: TContent[]
): Result<undefined, AssertionFailed> {
  if (actual.length === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The array is not empty.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertArrayIsEmpty
};
