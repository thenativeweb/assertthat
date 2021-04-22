import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { MapDiff } from '../../diffs/forMaps/MapDiff';
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

  if (diff.omissions.size === 0 && diff.changes.size === 0) {
    return value();
  }

  const cleanedDiff: MapDiff = {
    ...diff,
    additions: new Map(),
    equal: new Map()
  };

  return error(new AssertionFailed({
    message: 'The expected map is not entirely contained in the actual map.',
    actual: prettyPrint(actual),
    expected: `To entirely contain:\n${prettyPrint(expected)}`,
    diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertMapIsAtLeastMap
};
