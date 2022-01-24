import { AssertionFailed } from '../../errors';
import { assertStringIsEndingWithString } from '../forStrings/assertStringIsEndingWithString';
import { Result } from 'defekt';

const assertActualIsEndingWithActual = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertStringIsEndingWithString(actual, expected);
};

export {
  assertActualIsEndingWithActual
};
