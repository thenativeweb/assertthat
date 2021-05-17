import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsContainingItem = function <TContent>(
  actual: TContent[],
  item: TContent
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledItem = dispel(item);

  for (const actualItem of dispelledActual) {
    const diff = compare(actualItem, dispelledItem);

    if (isEqualDiff(diff)) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The array does not contain the expected item.',
    actual: prettyPrint(dispelledActual),
    expected: `To contain:\n${prettyPrint(dispelledItem)}`
  }));
};

export {
  assertArrayIsContainingItem
};
