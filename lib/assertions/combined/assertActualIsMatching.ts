import { AssertionFailed } from '../../errors';
import { assertStringIsMatchingRegExp } from '../forStrings/assertStringIsMatchingRegExp';
import { Result } from 'defekt';

const assertActualIsMatching = function (
  actual: string,
  expected: RegExp
): Result<undefined, AssertionFailed> {
  return assertStringIsMatchingRegExp(actual, expected);
};

export {
  assertActualIsMatching
};
