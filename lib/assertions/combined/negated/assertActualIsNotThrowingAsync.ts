import { assertFunctionIsNotThrowingAsync } from '../../forFunctions/assertFunctionIsNotThrowingAsync';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const assertActualIsNotThrowingAsync = async function <TError extends Error = Error> (
  actual: Function,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Promise<Result<undefined, AssertionFailed>> {
  return assertFunctionIsNotThrowingAsync(actual, expected);
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  assertActualIsNotThrowingAsync
};
