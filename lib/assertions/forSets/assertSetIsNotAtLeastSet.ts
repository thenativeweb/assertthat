import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsNotAtLeastSet = function <TContent>(
  actual: Set<TContent>,
  expected: Set<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareSets(
    dispelledActual,
    dispelledExpected
  );

  if (!isEqualDiff(diff) && diff.omissions.size > 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The expected set is entirely contained in the actual set.',
    actual: prettyPrint(dispelledActual),
    expected: `To not entirely contain:\n${prettyPrint(dispelledExpected)}`
  }));
};

export {
  assertSetIsNotAtLeastSet
};
