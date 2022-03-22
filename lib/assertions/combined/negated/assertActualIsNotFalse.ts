import { assertAnyIsNotFalse } from '../../forAny/assertAnyIsNotFalse';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotFalse = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotFalse(actual);
};

export {
  assertActualIsNotFalse
};
