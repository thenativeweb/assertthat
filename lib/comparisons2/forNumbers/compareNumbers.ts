import { Blank, blank } from '../../constants/blank';
import { numberDiff, NumberDiff } from '../../diffs/forNumbers/NumberDiff';
import { numberVsBlankCost, unequalNumberCost } from '../../constants/costs';

const compareNumbers = function (actual: number | Blank, expected: number | Blank): NumberDiff {
  if (expected === blank || actual === blank) {
    return numberDiff({
      difference: Number.POSITIVE_INFINITY,
      cost: numberVsBlankCost
    });
  }

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
