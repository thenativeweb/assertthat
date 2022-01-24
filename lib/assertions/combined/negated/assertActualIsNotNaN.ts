import { AssertionFailed } from '../../../errors';
import { assertNumberIsNotNaN } from '../../forNumbers/assertNumberIsNotNaN';
import { Result } from 'defekt';

const assertActualIsNotNaN = function (
  actual: number
): Result<undefined, AssertionFailed> {
  return assertNumberIsNotNaN(actual);
};

export {
  assertActualIsNotNaN
};
