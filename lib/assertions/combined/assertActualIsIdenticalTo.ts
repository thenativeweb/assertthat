import { Result } from 'defekt';
import { AssertionFailed } from '../../errors';
import { assertAnyIsIdenticalToExpected } from '../forAny/assertAnyIsIdenticalToExpected';

const assertActualIsIdenticalTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsIdenticalToExpected(actual, expected);
};

export {
  assertActualIsIdenticalTo
};
