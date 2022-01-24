import { assertAnyIsOfType } from '../forAny/assertAnyIsOfType';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';
import { Type } from 'typedescriptor';

const assertActualIsOfType = function (
  actual: any,
  expected: Type | 'result'
): Result<undefined, AssertionFailed> {
  return assertAnyIsOfType(actual, expected);
};

export {
  assertActualIsOfType
};
