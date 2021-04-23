import { AssertionFailed } from '../../errors';
import { compareBooleans } from '../../comparisons/forBooleans/compareBooleans';
import { error, Result, value } from 'defekt';

const assertBooleanIsTrue = function (
  actual: boolean
): Result<undefined, AssertionFailed> {
  const diff = compareBooleans(actual, true);

  if (diff.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The boolean is not true.'
  }));
};

export {
  assertBooleanIsTrue
};