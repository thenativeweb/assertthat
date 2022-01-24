import { assertAnyIsNotNull } from '../../forAny/assertAnyIsNotNull';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotNull = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotNull(actual);
};

export {
  assertActualIsNotNull
};
