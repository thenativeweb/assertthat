import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertAnyIsNull = function (
  actual: any
): Result<undefined, AssertionFailed> {
  if (actual === null) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is not null.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertAnyIsNull
};
