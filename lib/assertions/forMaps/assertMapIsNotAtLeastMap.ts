import { AssertionFailed } from '../../errors';
import { compareMaps } from '../../comparisons/forMaps/compareMaps';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertMapIsNotAtLeastMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>,
  expected: Map<TKey, TValue>
): Result<undefined, AssertionFailed> {
  const diff = compareMaps(
    dispel(actual),
    dispel(expected)
  );

  if (!isEqualDiff(diff) && (diff.omissions.size > 0 || diff.changes.size > 0)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The expected map is entirely contained in the actual map.',
    actual: prettyPrint(actual),
    expected: `To not entirely contain:\n${prettyPrint(expected)}`
  }));
};

export {
  assertMapIsNotAtLeastMap
};
