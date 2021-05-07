import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotContainingString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!actual.includes(expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is containing the sub-string.',
    actual: prettyPrint(actual),
    expected: `To not contain:\n${prettyPrint(expected)}`
  }));
};

export {
  assertStringIsNotContainingString
};
