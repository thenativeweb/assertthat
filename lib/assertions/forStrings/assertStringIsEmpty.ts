import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsEmpty = function (
  actual: string
): Result<undefined, AssertionFailed> {
  if (actual.length === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not empty.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertStringIsEmpty
};
