import { assertAnyIsNotOfType } from '../../forAny/assertAnyIsNotOfType';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';
import { Type } from 'typedescriptor';

const assertActualIsNotOfType = function (
  actual: any,
  expected: Type | 'result'
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotOfType(actual, expected);
};

export {
  assertActualIsNotOfType
};
