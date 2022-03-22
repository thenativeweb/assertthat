import { assertFunctionIsThrowingAsync } from '../forFunctions/assertFunctionIsThrowingAsync';
import { AssertionFailed } from '../../errors';
import { Result } from 'defekt';

const assertActualIsThrowingAsync = async function <TError extends Error = Error> (
  actual: (...args: any[]) => any,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Promise<Result<undefined, AssertionFailed>> {
  return assertFunctionIsThrowingAsync(actual, expected);
};

export {
  assertActualIsThrowingAsync
};
