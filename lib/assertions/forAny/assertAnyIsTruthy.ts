import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertAnyIsTruthy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is not truthy.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertAnyIsTruthy
};
