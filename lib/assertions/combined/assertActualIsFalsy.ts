import { assertAnyIsFalsy } from '../forAny/assertAnyIsFalsy';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsFalsy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsFalsy(actual);
};

export {
  assertActualIsFalsy
};
