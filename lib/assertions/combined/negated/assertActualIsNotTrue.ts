import { assertAnyIsNotTrue } from '../../forAny/assertAnyIsNotTrue';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotTrue = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotTrue(actual);
};

export {
  assertActualIsNotTrue
};
