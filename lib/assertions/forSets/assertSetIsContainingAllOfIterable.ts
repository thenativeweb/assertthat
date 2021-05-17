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
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(iterable);

  const setFromExpected = new Set(dispelledExpected);

  const diff = compareSets(dispelledActual, setFromExpected);

  if (isEqualDiff(diff)) {
    return value();
  }

  if (diff.omissions.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The set does not contain all expected items.',
    actual: prettyPrint(dispelledActual),
    expected: `To contain all of:\n${prettyPrint(dispelledExpected)}`,
    diff: `Missing these items:\n${prettyPrint(diff.omissions)}`
  }));
};

export {
  assertSetIsContainingAllOfIterable
};
