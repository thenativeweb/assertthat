import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsEndingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (actual.endsWith(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not ending with the expected sub-string.',
    actual: prettyPrint(actual),
    expected: `To end with:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsEndingWithString
};
