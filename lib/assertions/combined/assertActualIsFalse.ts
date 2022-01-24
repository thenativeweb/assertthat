import { assertAnyIsFalse } from '../forAny/assertAnyIsFalse';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsFalse = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsFalse(actual);
};

export {
  assertActualIsFalse
};
