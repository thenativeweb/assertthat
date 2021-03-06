import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertActualIsNotFalsy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is falsy.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertActualIsNotFalsy
};
