import { AssertionFailed } from '../../../errors';
import { assertStringIsNotEndingWithString } from '../../forStrings/assertStringIsNotEndingWithString';
import { Result } from 'defekt';

const assertActualIsNotEndingWithActual = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  return assertStringIsNotEndingWithString(actual, expected);
};

export {
  assertActualIsNotEndingWithActual
};
