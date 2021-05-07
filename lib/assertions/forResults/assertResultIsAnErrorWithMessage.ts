import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrintString } from '../../prettyPrint/forStrings/prettyPrintString';
import { error, Result, value } from 'defekt';

const assertResultIsAnErrorWithMessage = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!actual.hasError()) {
    return error(new AssertionFailed({
      message: 'The result is a value.',
      expected: `To be an error with message ${prettyPrintString(expected)}.`
    }));
  }

  const diff = compare(actual.error.message, expected);

  if (isEqualDiff(diff)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The error does not have the expected message.',
    expected: `To have the message ${prettyPrintString(expected)}`,
    actual: prettyPrintString(actual.error.message)
  }));
};

export {
  assertResultIsAnErrorWithMessage
};
