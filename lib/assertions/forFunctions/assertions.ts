import { assertFunctionIsNotThrowing } from './assertFunctionIsNotThrowing';
import { assertFunctionIsNotThrowingAsync } from './assertFunctionIsNotThrowingAsync';
import { assertFunctionIsThrowing } from './assertFunctionIsThrowing';
import { assertFunctionIsThrowingAsync } from './assertFunctionIsThrowingAsync';
import { FunctionAssertions } from './FunctionAssertions';
import { report } from '../../report';

const getAssertionsForFunction = function (
// eslint-disable-next-line @typescript-eslint/ban-types
  actual: Function
): FunctionAssertions {
  return {
    throwing <TError extends Error = Error>(
      expected?: string | RegExp | ((ex: TError) => boolean)
    ): void {
      report(assertFunctionIsThrowing(actual, expected));
    },
    async throwingAsync <TError extends Error = Error>(
      expected?: string | RegExp | ((ex: TError) => boolean)
    ): Promise<void> {
      report(await assertFunctionIsThrowingAsync(actual, expected));
    }
  };
};

const getNegatedAssertionsForFunction = function (
// eslint-disable-next-line @typescript-eslint/ban-types
  actual: Function
): FunctionAssertions {
  return {
    throwing <TError extends Error = Error>(
      expected?: string | RegExp | ((ex: TError) => boolean)
    ): void {
      report(assertFunctionIsNotThrowing(actual, expected));
    },
    async throwingAsync <TError extends Error = Error>(
      expected?: string | RegExp | ((ex: TError) => boolean)
    ): Promise<void> {
      report(await assertFunctionIsNotThrowingAsync(actual, expected));
    }
  };
};

export {
  getAssertionsForFunction,
  getNegatedAssertionsForFunction
};
