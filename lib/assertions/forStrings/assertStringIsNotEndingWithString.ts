import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotEndingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!actual.endsWith(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is ending with the sub-string.',
    actual: prettyPrint(actual),
    expected: `To not end with:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsNotEndingWithString
};
