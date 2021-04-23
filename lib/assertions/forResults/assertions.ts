import { assertResultIsAnError } from './assertResultIsAnError';
import { assertResultIsAValue } from './assertResultIsAValue';
import { assertResultIsNotAnError } from './assertResultIsNotAnError';
import { assertResultIsNotAValue } from './assertResultIsNotAValue';
import { report } from '../../report';
import { Result } from 'defekt';
import { ResultAssertions } from './ResultAssertions';

const getAssertionsForResult = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): ResultAssertions {
  return {
    aValue (): void {
      report(assertResultIsAValue(actual));
    },
    anError (): void {
      report(assertResultIsAnError(actual));
    }
  };
};

const getNegatedAssertionsForResult = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): ResultAssertions {
  return {
    aValue (): void {
      report(assertResultIsNotAValue(actual));
    },
    anError (): void {
      report(assertResultIsNotAnError(actual));
    }
  };
};

export {
  getAssertionsForResult,
  getNegatedAssertionsForResult
};
