import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertActualIsNotTruthy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (!actual) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is truthy.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertActualIsNotTruthy
};
