import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsContainingString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (actual.includes(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not containing the expected sub-string.',
    actual: prettyPrint(actual),
    expected: `To contain:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsContainingString
};
