import { AssertionFailed } from '../../errors';
import { assertStringIsNotContainingString } from './assertStringIsNotContainingString';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotContainingAnyOfIterable = function (
  actual: string,
  iterable: Iterable<string>
): Result<undefined, AssertionFailed> {
  const containedItems = new Set();

  for (const item of iterable) {
    const result = assertStringIsNotContainingString(actual, item);

    if (result.hasError()) {
      containedItems.add(item);
    }
  }

  if (containedItems.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string does contain one or more of the sub-strings in the iterable.',
    actual: prettyPrint(actual),
    expected: `To not contain any of:\n${prettyPrint(iterable)}`,
    diff: `These sub-strings are contained, but should not be:\n${prettyPrint(containedItems)}`
  }));
};

export {
  assertStringIsNotContainingAnyOfIterable
};
