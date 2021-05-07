import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotMatchingRegExp = function (
  actual: string,
  expected: RegExp
): Result<undefined, AssertionFailed> {
  if (!expected.test(actual)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is matching the regex.',
    actual: prettyPrint(actual),
    expected: `To not match:\n${expected.toString()}`
  }));
};

export {
  assertStringIsNotMatchingRegExp
};
