import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { SetDiff } from '../../diffs/forSets/SetDiff';
import { error, Result, value } from 'defekt';

const assertSetIsAtLeastSet = function <TContent>(
  actual: Set<TContent>,
  expected: Set<TContent>
): Result<undefined, AssertionFailed> {
  const diff = compareSets(
    dispel(actual),
    dispel(expected)
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  if (diff.omissions.size === 0) {
    return value();
  }

  const cleanedDiff: SetDiff = {
    ...diff,
    additions: new Set(),
    equal: new Set()
  };

  return error(new AssertionFailed({
    message: 'The expected set is not entirely contained in the actual set.',
    actual: prettyPrint(actual),
    expected: `To entirely contain:\n${prettyPrint(expected)}`,
    diff: `The following sub-set shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertSetIsAtLeastSet
};
