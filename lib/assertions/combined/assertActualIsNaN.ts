import { AssertionFailed } from '../../errors';
import { assertNumberIsNaN } from '../forNumbers/assertNumberIsNaN';
import { Result } from 'defekt';

const assertActualIsNaN = function (
  actual: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsNaN(actual);
};

export {
  assertActualIsNaN
};
