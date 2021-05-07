import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsContainingItem = function <TContent>(
  actual: Set<TContent>,
  item: TContent
): Result<undefined, AssertionFailed> {
  for (const actualItem of actual) {
    const diff = compare(dispel(actualItem), dispel(item));

    if (isEqualDiff(diff)) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The set does not contain the expected item.',
    actual: prettyPrint(actual),
    expected: `To contain:\n${prettyPrint(item)}`
  }));
};

export {
  assertSetIsContainingItem
};
