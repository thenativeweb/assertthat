import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { error, Result, value } from 'defekt';

const assertActualIsNotTrue = function (
  actual: any
): Result<undefined, AssertionFailed> {
  const diff = compare(actual, false);

  if (diff.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The value is true.'
  }));
};

export {
  assertActualIsNotTrue
};
