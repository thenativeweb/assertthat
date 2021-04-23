import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertResultIsAnError = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  if (actual.hasError()) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The result is a value.',
    actual: prettyPrint(actual)
  }));
};

export {
  assertResultIsAnError
};
