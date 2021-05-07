import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { SetDiff } from '../../diffs/forSets/SetDiff';
import { error, Result, value } from 'defekt';

const assertSetIsAtMostSet = function <TContent>(
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

  if (diff.additions.size === 0) {
    return value();
  }

  const cleanedDiff: SetDiff = {
    ...diff,
    omissions: new Set(),
    equal: new Set()
  };

  return error(new AssertionFailed({
    message: 'The actual set is not entirely contained in the expected set.',
    actual: prettyPrint(actual),
    expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
    diff: `The following sub-set shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertSetIsAtMostSet
};
