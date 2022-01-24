import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { error, Result, value } from 'defekt';

const assertAnyIsTrue = function (
  actual: any
): Result<undefined, AssertionFailed> {
  const diff = compare(actual, true);

  if (diff.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is not true.'
  }));
};

export {
  assertAnyIsTrue
};
