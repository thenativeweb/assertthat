import { assertAnyIsTrue } from '../forAny/assertAnyIsTrue';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsTrue = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsTrue(actual);
};

export {
  assertActualIsTrue
};
