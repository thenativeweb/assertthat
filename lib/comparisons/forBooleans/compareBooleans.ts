import { unequalBooleanCost } from '../../constants/costs';
import { booleanDiff, BooleanDiff } from '../../diffs/forBooleans/BooleanDiff';

const compareBooleans = function (
  actual: boolean,
  expected: boolean
): BooleanDiff {
  return booleanDiff({
    actual,
    expected,
    cost: unequalBooleanCost
  });
};

export {
  compareBooleans
};
