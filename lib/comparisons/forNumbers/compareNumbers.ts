import { unequalNumberCost } from '../../constants/costs';
import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';
import { numberDiff, NumberDiff } from '../../diffs/forNumbers/NumberDiff';

const compareNumbers = function (
  actual: number, expected: number
): NumberDiff | EqualDiff {
  const difference = actual - expected;

  if (difference === 0) {
    return equalDiff({ value: actual });
  }

  return numberDiff({
    actual,
    expected,
    difference,
    cost: unequalNumberCost
  });
};

export {
  compareNumbers
};
