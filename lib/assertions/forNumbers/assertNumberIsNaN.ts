import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertNumberIsNaN = function (
  actual: number
): Result<undefined, AssertionFailed> {
  if (Number.isNaN(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is not NaN.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertNumberIsNaN
};
