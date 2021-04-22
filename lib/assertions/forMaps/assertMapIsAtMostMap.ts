import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { MapDiff } from '../../diffs/forMaps/MapDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertMapIsAtMostMap = function <TKey, TValue>(
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

  if (diff.additions.size === 0 && diff.changes.size === 0) {
    return value();
  }

  const cleanedDiff: MapDiff = {
    ...diff,
    omissions: new Map(),
    equal: new Map()
  };

  return error(new AssertionFailed({
    message: 'The actual map is not entirely contained in the expected map.',
    actual: prettyPrint(actual),
    expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
    diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertMapIsAtMostMap
};
