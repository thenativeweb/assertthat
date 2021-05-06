import { assertResultIsAnError } from './assertResultIsAnError';
import { assertResultIsAnErrorWithMessage } from './assertResultIsAnErrorWithMessage';
import { assertResultIsAValue } from './assertResultIsAValue';
import { assertResultIsNotAnError } from './assertResultIsNotAnError';
import { assertResultIsNotAnErrorWithMessage } from './assertResultIsNotAnErrorWithMessage';
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
    },
    anErrorWithMessage (expected): void {
      report(assertResultIsAnErrorWithMessage(actual, expected));
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
    },
    anErrorWithMessage (expected): void {
      report(assertResultIsNotAnErrorWithMessage(actual, expected));
    }
  };
};

export {
  getAssertionsForResult,
  getNegatedAssertionsForResult
};
