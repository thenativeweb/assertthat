import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsNotContainingItem = function <TContent>(
  actual: TContent[],
  item: TContent
): Result<undefined, AssertionFailed> {
  for (const actualItem of actual) {
    const diff = compare(dispel(actualItem), dispel(item));

    if (isEqualDiff(diff)) {
      return error(new AssertionFailed({
        message: 'The array contains the item.',
        expected: `To not contain:\n${prettyPrint(item)}`,
        actual: prettyPrint(actual)
      }));
    }
  }

  return value();
};

export {
  assertArrayIsNotContainingItem
};
