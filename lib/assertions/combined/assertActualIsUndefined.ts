import { assertAnyIsUndefined } from '../forAny/assertAnyIsUndefined';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsUndefined = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsUndefined(actual);
};

export {
  assertActualIsUndefined
};
