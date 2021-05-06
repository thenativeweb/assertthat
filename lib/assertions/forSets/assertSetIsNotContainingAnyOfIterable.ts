import { AssertionFailed } from '../../errors';
import { compareSets } from '../../comparisons/forSets/compareSets';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsNotContainingAnyOfIterable = function <TContent>(
  actual: Set<TContent>,
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  const setFromExpected = new Set(iterable);

  const diff = compareSets(dispel(actual), dispel(setFromExpected));

  if (!isEqualDiff(diff) && diff.equal.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The set does contains one or more of the items in the iterable.',
    actual: prettyPrint(actual),
    expected: `To not contain any of:\n${prettyPrint(iterable)}`,
    diff: `These items are contained, but should not be:\n${prettyPrint(
      isEqualDiff(diff) ? setFromExpected : diff.equal
    )}`
  }));
};

export {
  assertSetIsNotContainingAnyOfIterable
};
