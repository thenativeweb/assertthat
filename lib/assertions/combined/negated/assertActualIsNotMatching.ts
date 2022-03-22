import { AssertionFailed } from '../../../errors';
import { assertStringIsNotMatchingRegExp } from '../../forStrings/assertStringIsNotMatchingRegExp';
import { Result } from 'defekt';

const assertActualIsNotMatching = function (
  actual: string,
  expected: RegExp
): Result<undefined, AssertionFailed> {
  return assertStringIsNotMatchingRegExp(actual, expected);
};

export {
  assertActualIsNotMatching
};
