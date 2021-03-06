import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsNotAtMostSet = function <TContent>(
  actual: Set<TContent>,
  expected: Set<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareSets(
    dispelledActual,
    dispelledExpected
  );

  if (!isEqualDiff(diff) && diff.additions.size > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The actual set is entirely contained in the expected set.',
    actual: prettyPrint(dispelledActual),
    expected: `To not be entirely contained in:\n${prettyPrint(dispelledExpected)}`
  }));
};

export {
  assertSetIsNotAtMostSet
};
