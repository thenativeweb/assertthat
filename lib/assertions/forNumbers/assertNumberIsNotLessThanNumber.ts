import { AssertionFailed } from '../../errors';
import { compareNumbers } from '../../comparisons/forNumbers/compareNumbers';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertNumberIsNotLessThanNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  const diff = compareNumbers(actual, expected);

  if (isEqualDiff(diff) || diff.difference > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is less than the expected number.',
    actual: prettyPrint(actual),
    expected: `To not be less than:\n${prettyPrint(expected)}`
  }));
};

export {
  assertNumberIsNotLessThanNumber
};
