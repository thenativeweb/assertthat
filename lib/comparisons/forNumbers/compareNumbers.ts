import { unequalNumberCost } from '../../constants/costs';
import { numberDiff, NumberDiff } from '../../diffs/forNumbers/NumberDiff';

const compareNumbers = function (
  actual: number, expected: number
): NumberDiff {
  const difference = actual - expected;

  return numberDiff({
    actual,
    expected,
    difference,
    cost: difference === 0 ? 0 : unequalNumberCost
  });
};

export {
  compareNumbers
};
