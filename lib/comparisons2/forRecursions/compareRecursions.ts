import { compareStrings } from '../forStrings/compareStrings';
import { Recursion } from '../../types/Recursion';
import { unequalRecursionCost } from '../../constants/costs';
import { recursionDiff, RecursionDiff } from '../../diffs/forRecursions/RecursionDiff';

const compareRecursions = function (
  actual: Recursion,
  expected: Recursion
): RecursionDiff {
  const recursionPathDiff = compareStrings(
    actual.recursionPath,
    expected.recursionPath
  );

  if (recursionPathDiff.cost === 0) {
    return recursionDiff({
      cost: 0,
      recursionPathDiff
    });
  }

  return recursionDiff({
    cost: unequalRecursionCost,
    recursionPathDiff
  });
};

export {
  compareRecursions
};
