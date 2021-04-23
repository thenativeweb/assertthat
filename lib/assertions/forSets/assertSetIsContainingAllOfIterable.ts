import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsContainingAllOfIterable = function <TContent>(
  actual: Set<TContent>,
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  const setFromExpected = new Set(dispel(iterable));

  const diff = compareSets(actual, setFromExpected);

  if (isEqualDiff(diff)) {
    return value();
  }

  if (diff.omissions.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The set does not contain all expected items.',
    actual: prettyPrint(actual),
    expected: `To contain all of:\n${prettyPrint(iterable)}`,
    diff: `Missing these items:\n${prettyPrint(diff.omissions)}`
  }));
};

export {
  assertSetIsContainingAllOfIterable
};
