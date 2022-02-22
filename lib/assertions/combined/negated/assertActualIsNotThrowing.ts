import { assertFunctionIsNotThrowing } from '../../forFunctions/assertFunctionIsNotThrowing';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotThrowing = function <TError extends Error = Error> (
  actual: (...args: any[]) => any,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Result<undefined, AssertionFailed> {
  return assertFunctionIsNotThrowing(actual, expected);
};

export {
  assertActualIsNotThrowing
};
