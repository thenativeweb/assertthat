import { Result } from 'defekt';
import { ResultAssertions } from './ResultAssertions';

const getAssertionsForResult = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): ResultAssertions<TValue, TError> {
  return {

  };
};

const getNegatedAssertionsForResult = function <TValue, TError extends Error>(
  actual: Result<TValue, TError>
): ResultAssertions<TValue, TError> {
  return {

  };
};

export {
  getAssertionsForResult,
  getNegatedAssertionsForResult
};
