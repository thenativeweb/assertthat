import { AssertionFailed } from '../../errors';
import { assertSetIsContainingItem } from './assertSetIsContainingItem';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertSetIsContainingAnyOfIterable = function <TContent>(
  actual: Set<TContent>,
  iterable: Iterable<TContent>
): Result<undefined, AssertionFailed> {
  for (const item of iterable) {
    const result = assertSetIsContainingItem(actual, item);

    if (result.hasValue()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The set does not contain any of the expected items.',
    actual: prettyPrint(actual),
    expected: `To contain any of:\n${prettyPrint(iterable)}`
  }));
};

export {
  assertSetIsContainingAnyOfIterable
};
