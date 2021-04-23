import { AssertionFailed } from '../../errors';
import { assertSetIsContainingItem } from './assertSetIsContainingItem';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsNotContainingAllOfIterable = function <TContent>(
  actual: Set<TContent>,
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  for (const item of iterable) {
    const result = assertSetIsContainingItem(actual, item);

    if (result.hasError()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The set contains all items in the iterable.',
    actual: prettyPrint(actual),
    expected: `To not contain all of:\n${prettyPrint(iterable)}`
  }));
};

export {
  assertSetIsNotContainingAllOfIterable
};
