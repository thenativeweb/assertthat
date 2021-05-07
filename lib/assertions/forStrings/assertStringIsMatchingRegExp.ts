import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsMatchingRegExp = function (
  actual: string,
  expected: RegExp
): Result<undefined, AssertionFailed> {
  if (expected.test(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not matching the expected regex.',
    actual: prettyPrint(actual),
    expected: `To match:\n${expected.toString()}`
  }));
};

export {
  assertStringIsMatchingRegExp
};
