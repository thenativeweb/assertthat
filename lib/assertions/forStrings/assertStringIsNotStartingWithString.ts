import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotStartingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!actual.startsWith(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is starting with the sub-string.',
    actual: prettyPrint(actual),
    expected: `To not start with:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsNotStartingWithString
};
