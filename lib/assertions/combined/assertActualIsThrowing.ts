import { assertFunctionIsThrowing } from '../forFunctions/assertFunctionIsThrowing';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const assertActualIsThrowing = function <TError extends Error = Error> (
  actual: Function,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Result<undefined, AssertionFailed> {
  return assertFunctionIsThrowing(actual, expected);
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  assertActualIsThrowing
};
