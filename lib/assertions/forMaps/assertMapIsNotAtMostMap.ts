import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertMapIsNotAtMostMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>,
  expected: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  const diff = compareMaps(
    dispel(actual),
    dispel(expected)
  );

  if (!isEqualDiff(diff) && (diff.additions.size > 0 || diff.changes.size > 0)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The actual map is entirely contained in the expected map.',
    actual: prettyPrint(actual),
    expected: `To not be entirely contained in:\n${prettyPrint(expected)}`
  }));
};

export {
  assertMapIsNotAtMostMap
};
