import { compareStrings } from '../forStrings/compareStrings';
import { Recursion } from '../../types/Recursion';
import { unequalRecursionCost } from '../../constants/costs';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { recursionDiff, RecursionDiff } from '../../diffs/forRecursions/RecursionDiff';

const compareRecursions = function (
  actual: Recursion,
  expected: Recursion
): RecursionDiff | EqualDiff {
  const recursionPathDiff = compareStrings(
    actual.recursionPath,
    expected.recursionPath
  );

  if (isEqualDiff(recursionPathDiff)) {
    return equalDiff({
      value: actual
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
