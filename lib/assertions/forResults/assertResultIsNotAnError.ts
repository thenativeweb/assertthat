import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertResultIsNotAnError = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  if (!actual.hasError()) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The result is an error.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertResultIsNotAnError
};
