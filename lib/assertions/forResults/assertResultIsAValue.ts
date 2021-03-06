import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

// eslint-disable-next-line @typescript-eslint/naming-convention
const assertResultIsAValue = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): Result<undefined, AssertionFailed> {
  if (actual.hasValue()) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The result is an error.',
    actual: prettyPrint(dispel(actual))
  }));
};

export {
  assertResultIsAValue
};
