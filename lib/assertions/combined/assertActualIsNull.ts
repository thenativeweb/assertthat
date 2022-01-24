import { assertAnyIsNull } from '../forAny/assertAnyIsNull';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsNull = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNull(actual);
};

export {
  assertActualIsNull
};
