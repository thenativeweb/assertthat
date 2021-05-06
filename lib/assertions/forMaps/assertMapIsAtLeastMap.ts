import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { findMapDiffOmissions } from '../../diffs/forMaps/findMapDiffOmissions';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertMapIsAtLeastMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>,
  expected: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  const diff = compareMaps(
    dispel(actual),
    dispel(expected)
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  const diffWithOnlyOmissions = findMapDiffOmissions(diff);

  if (diffWithOnlyOmissions.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The expected map is not entirely contained in the actual map.',
    actual: prettyPrint(actual),
    expected: `To entirely contain:\n${prettyPrint(expected)}`,
    diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(diffWithOnlyOmissions)}`
  }));
};

export {
  assertMapIsAtLeastMap
};
