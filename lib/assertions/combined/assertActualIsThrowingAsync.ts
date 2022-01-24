import { assertFunctionIsThrowingAsync } from '../forFunctions/assertFunctionIsThrowingAsync';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const assertActualIsThrowingAsync = async function <TError extends Error = Error> (
  actual: Function,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Promise<Result<undefined, AssertionFailed>> {
  return assertFunctionIsThrowingAsync(actual, expected);
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  assertActualIsThrowingAsync
};
