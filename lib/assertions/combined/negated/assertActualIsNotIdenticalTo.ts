import { assertAnyIsNotIdenticalToExpected } from '../../forAny/assertAnyIsNotIdenticalToExpected';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotIdenticalTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotIdenticalToExpected(actual, expected);
};

export {
  assertActualIsNotIdenticalTo
};
