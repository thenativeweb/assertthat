import { assertAnyIsIdenticalToExpected } from '../forAny/assertAnyIsIdenticalToExpected';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsIdenticalTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsIdenticalToExpected(actual, expected);
};

export {
  assertActualIsIdenticalTo
};
