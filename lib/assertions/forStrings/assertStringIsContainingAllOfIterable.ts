import { AssertionFailed } from '../../errors';
import { assertStringIsContainingString } from './assertStringIsContainingString';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsContainingAllOfIterable = function (
  actual: string,
  iterable: Iterable<string>
): Result<undefined, AssertionFailed> {
  const missingItems = new Set<string>();

  for (const expectedItem of iterable) {
    const result = assertStringIsContainingString(actual, expectedItem);

    if (result.hasError()) {
      missingItems.add(expectedItem);
    }
  }

  if (missingItems.size === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string does not contain all expected sub-strings.',
    actual: prettyPrint(actual),
    expected: `To contain all of:\n${prettyPrint(iterable)}`,
    diff: `Missing these sub-strings:\n${prettyPrint(missingItems)}`
  }));
};

export {
  assertStringIsContainingAllOfIterable
};
