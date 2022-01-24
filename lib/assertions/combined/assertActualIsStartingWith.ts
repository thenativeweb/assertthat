import { AssertionFailed } from '../../errors';
import { assertStringIsStartingWithString } from '../forStrings/assertStringIsStartingWithString';
import { Result } from 'defekt';

const assertActualIsStartingWith = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertStringIsStartingWithString(actual, expected);
};

export {
  assertActualIsStartingWith
};
