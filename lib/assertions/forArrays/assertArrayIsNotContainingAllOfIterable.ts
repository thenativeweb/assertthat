import { assertArrayIsContainingItem } from './assertArrayIsContainingItem';
import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertArrayIsNotContainingAllOfIterable = function <TContent>(
  actual: TContent[],
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  for (const item of iterable) {
    const result = assertArrayIsContainingItem(actual, item);

    if (result.hasError()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The array contains all items in the iterable.',
    actual: prettyPrint(actual),
    expected: `To not contain all of:\n${prettyPrint(iterable)}`
  }));
};

export {
  assertArrayIsNotContainingAllOfIterable
};
