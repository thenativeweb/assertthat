import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertActualIsNull = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual === null) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is not null.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertActualIsNull
};
