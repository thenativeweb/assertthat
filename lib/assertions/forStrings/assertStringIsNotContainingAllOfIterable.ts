import { AssertionFailed } from '../../errors';
import { assertStringIsContainingString } from './assertStringIsContainingString';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertStringIsNotContainingAllOfIterable = function (
  actual: string,
  iterable: Iterable<string>
): Result<undefined, AssertionFailed> {
  for (const item of iterable) {
    const result = assertStringIsContainingString(actual, item);

    if (result.hasError()) {
      return value();
    }
  }

  return error(new AssertionFailed({
    message: 'The string contains all sub-strings in the iterable.',
    actual: prettyPrint(actual),
    expected: `To not contain all of:\n${prettyPrint(iterable)}`
  }));
};

export {
  assertStringIsNotContainingAllOfIterable
};
