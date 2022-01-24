import { Result } from 'defekt';
import { AssertionFailed } from '../../../errors';
import { assertAnyIsNotIdenticalToExpected } from '../../forAny/assertAnyIsNotIdenticalToExpected';

const assertActualIsNotIdenticalTo = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  return assertAnyIsNotIdenticalToExpected(actual, expected);
};

export {
  assertActualIsNotIdenticalTo
};
