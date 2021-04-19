import { assertFunctionIsNotThrowing } from './assertFunctionIsNotThrowing';
import { assertFunctionIsNotThrowingAsync } from './assertFunctionIsNotThrowingAsync';
import { assertFunctionIsThrowing } from './assertFunctionIsThrowing';
import { assertFunctionIsThrowingAsync } from './assertFunctionIsThrowingAsync';
import { FunctionAssertions } from './FunctionAssertions';
import { report } from '../../report';

// eslint-disable-next-line @typescript-eslint/ban-types
const getAssertionsForFunction = function (actual: Function): FunctionAssertions {
  return {
    throwing (): void {
      report(assertFunctionIsThrowing(actual));
    },
    async throwingAsync (): Promise<void> {
      report(await assertFunctionIsThrowingAsync(actual));
    }
  };
};

// eslint-disable-next-line @typescript-eslint/ban-types
const getNegatedAssertionsForFunction = function (actual: Function): FunctionAssertions {
  return {
    throwing (): void {
      report(assertFunctionIsNotThrowing(actual));
    },
    async throwingAsync (): Promise<void> {
      report(await assertFunctionIsNotThrowingAsync(actual));
    }
  };
};

export {
  getAssertionsForFunction,
  getNegatedAssertionsForFunction
};
