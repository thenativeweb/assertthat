import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertAnyIsIdenticalToExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  if (actual === expected) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The values are not identical.'
  }));
};

export {
  assertAnyIsIdenticalToExpected
};
