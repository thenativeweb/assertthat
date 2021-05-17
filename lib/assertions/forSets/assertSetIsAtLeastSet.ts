import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { findSetDiffOmissions } from '../../diffs/forSets/findSetDiffOmissions';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertSetIsAtLeastSet = function <TContent>(
  actual: Set<TContent>,
  expected: Set<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareSets(
    dispelledActual,
    dispelledExpected
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  const diffWithOnlyOmissions = findSetDiffOmissions(diff);

  if (diffWithOnlyOmissions.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The expected set is not entirely contained in the actual set.',
    actual: prettyPrint(dispelledActual),
    expected: `To entirely contain:\n${prettyPrint(dispelledExpected)}`,
    diff: `The following sub-set shows relevant changes between actual and expected:\n${prettyPrintDiff(diffWithOnlyOmissions)}`
  }));
};

export {
  assertSetIsAtLeastSet
};
