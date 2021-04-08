import { Blank, blank } from '../../constants/blank';
import { booleanDiff, BooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import { booleanVsBlankCost, unequalBooleanCost } from '../../constants/costs';

const compareBooleans = function (actual: boolean | Blank, expected: boolean | Blank): BooleanDiff {
  if (expected === blank || actual === blank) {
    return booleanDiff({
      cost: booleanVsBlankCost
    });
  }

  return booleanDiff({
    actual,
    expected,
    cost: unequalBooleanCost
  });
};

export {
  compareBooleans
};
