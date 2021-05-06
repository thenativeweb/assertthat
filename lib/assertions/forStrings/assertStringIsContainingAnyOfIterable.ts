import { AssertionFailed } from '../../errors';
import { assertStringIsContainingString } from './assertStringIsContainingString';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsContainingAnyOfIterable = function (
  actual: string,
  iterable: Iterable<string>
): Result<undefined, AssertionFailed> {
  for (const item of iterable) {
    const result = assertStringIsContainingString(actual, item);

    if (result.hasValue()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The string does not contain any of the expected sub-strings.',
    actual: prettyPrint(actual),
    expected: `To contain any of:\n${prettyPrint(iterable)}`
  }));
};

export {
  assertStringIsContainingAnyOfIterable
};
