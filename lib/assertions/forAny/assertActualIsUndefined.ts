import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertActualIsUndefined = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual === undefined) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is not undefined.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertActualIsUndefined
};
