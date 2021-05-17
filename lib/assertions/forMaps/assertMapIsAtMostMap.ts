import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { findMapDiffAdditions } from '../../diffs/forMaps/findMapDiffAdditions';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertMapIsAtMostMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>,
  expected: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareMaps(
    dispelledActual,
    dispelledExpected
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  const diffWithOnlyAdditions = findMapDiffAdditions(diff);

  if (diffWithOnlyAdditions.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The actual map is not entirely contained in the expected map.',
    actual: prettyPrint(dispelledActual),
    expected: `To be entirely contained in:\n${prettyPrint(dispelledExpected)}`,
    diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(diffWithOnlyAdditions)}`
  }));
};

export {
  assertMapIsAtMostMap
};
