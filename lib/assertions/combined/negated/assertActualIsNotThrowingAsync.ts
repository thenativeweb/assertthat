import { assertFunctionIsNotThrowingAsync } from '../../forFunctions/assertFunctionIsNotThrowingAsync';
import { AssertionFailed } from '../../../errors';
import { Result } from 'defekt';

const assertActualIsNotThrowingAsync = async function <TError extends Error = Error> (
  actual: (...args: any[]) => any,
  expected?: string | RegExp | ((ex: TError) => boolean)
): Promise<Result<undefined, AssertionFailed>> {
  return assertFunctionIsNotThrowingAsync(actual, expected);
};

export {
  assertActualIsNotThrowingAsync
};
