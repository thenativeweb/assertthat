import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertObjectIsEmpty = function (
  actual: object
): Result<undefined, AssertionFailed> {
  if (Object.keys(actual).length === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The object is not empty.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertObjectIsEmpty
};
