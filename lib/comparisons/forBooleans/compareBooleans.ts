import { unequalBooleanCost } from '../../constants/costs';
import { booleanDiff, BooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';

const compareBooleans = function (
  actual: boolean,
  expected: boolean
): BooleanDiff | EqualDiff {
  if (actual === expected) {
    return equalDiff({ value: actual });
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
