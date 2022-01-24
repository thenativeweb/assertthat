import { assertFunctionIsNotThrowing } from '../../forFunctions/assertFunctionIsNotThrowing';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const assertActualIsNotThrowing = function <TError extends Error = Error> (
  actual: Function,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Result<undefined, AssertionFailed> {
  return assertFunctionIsNotThrowing(actual, expected);
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  assertActualIsNotThrowing
};
