import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrintString } from '../../prettyPrint/forStrings/prettyPrintString';
import { error, Result, value } from 'defekt';

const assertResultIsNotAnErrorWithMessage = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!actual.hasError()) {
    return value();
  }

  const diff = compare(actual.error.message, expected);

  if (!isEqualDiff(diff)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The error has the expected message.',
    expected: `To not have the message ${prettyPrintString(expected)}`
  }));
};

export {
  assertResultIsNotAnErrorWithMessage
};
