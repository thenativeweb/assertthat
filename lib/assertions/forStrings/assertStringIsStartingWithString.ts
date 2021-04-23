import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsStartingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (actual.startsWith(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not starting with the expected sub-string.',
    actual: prettyPrint(actual),
    expected: `To start with:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsStartingWithString
};
