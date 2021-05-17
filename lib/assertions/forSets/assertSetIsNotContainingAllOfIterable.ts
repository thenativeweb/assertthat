import { AssertionFailed } from '../../errors';
import { assertSetIsContainingItem } from './assertSetIsContainingItem';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsNotContainingAllOfIterable = function <TContent>(
  actual: Set<TContent>,
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(iterable);

  for (const item of dispelledExpected) {
    const result = assertSetIsContainingItem(dispelledActual, item);

    if (result.hasError()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The set contains all items in the iterable.',
    actual: prettyPrint(dispelledActual),
    expected: `To not contain all of:\n${prettyPrint(dispelledExpected)}`
  }));
};

export {
  assertSetIsNotContainingAllOfIterable
};
