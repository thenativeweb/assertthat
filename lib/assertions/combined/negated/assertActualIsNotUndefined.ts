import { assertAnyIsNotUndefined } from '../../forAny/assertAnyIsNotUndefined';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotUndefined = function (
  actual: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotUndefined(actual);
};

export {
  assertActualIsNotUndefined
};
