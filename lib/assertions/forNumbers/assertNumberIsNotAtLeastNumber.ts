import { AssertionFailed } from '../../errors';
import { compareNumbers } from '../../comparisons/forNumbers/compareNumbers';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertNumberIsNotAtLeastNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  const diff = compareNumbers(actual, expected);

  if (!isEqualDiff(diff) && diff.difference < 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is greater than or equal to the expected number.',
    actual: prettyPrint(actual),
    expected: `To not be at least:\n${prettyPrint(expected)}`
  }));
};

export {
  assertNumberIsNotAtLeastNumber
};
