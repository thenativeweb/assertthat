import { assertAnyIsNotFalsy } from '../../forAny/assertAnyIsNotFalsy';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotFalsy = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotFalsy(actual);
};

export {
  assertActualIsNotFalsy
};
