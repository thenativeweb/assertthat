import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsContainingAllOfIterable = function <TContent>(
  actual: TContent[],
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(iterable);

  const setFromActual = new Set(dispelledActual);
  const setFromExpected = new Set(dispelledExpected);

  const diff = compareSets(setFromActual, setFromExpected);

  if (isEqualDiff(diff)) {
    return value();
  }

  if (diff.omissions.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The array does not contain all expected items.',
    actual: prettyPrint(dispelledActual),
    expected: `To contain all of:\n${prettyPrint(dispelledExpected)}`,
    diff: `Missing these items:\n${prettyPrint(diff.omissions)}`
  }));
};

export {
  assertArrayIsContainingAllOfIterable
};
