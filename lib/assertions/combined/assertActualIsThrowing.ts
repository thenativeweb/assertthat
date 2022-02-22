import { assertFunctionIsThrowing } from '../forFunctions/assertFunctionIsThrowing';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsThrowing = function <TError extends Error = Error> (
  actual: (...args: any[]) => any,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Result<undefined, AssertionFailed> {
  return assertFunctionIsThrowing(actual, expected);
};

export {
  assertActualIsThrowing
};
