import { assertArrayIsContainingItem } from './assertArrayIsContainingItem';
import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsContainingAnyOfIterable = function <TContent>(
  actual: TContent[],
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(iterable);

  for (const item of dispelledExpected) {
    const result = assertArrayIsContainingItem(actual, item);

    if (result.hasValue()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The array does not contain any of the expected items.',
    actual: prettyPrint(dispelledActual),
    expected: `To contain any of:\n${prettyPrint(dispelledExpected)}`
  }));
};

export {
  assertArrayIsContainingAnyOfIterable
};
