import { AssertionFailed } from '../../../errors';
import { assertStringIsNotStartingWithString } from '../../forStrings/assertStringIsNotStartingWithString';
import { Result } from 'defekt';

const assertActualIsNotStartingWith = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertStringIsNotStartingWithString(actual, expected);
};

export {
  assertActualIsNotStartingWith
};
