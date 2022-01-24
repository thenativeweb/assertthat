import { assertArrayIsNotContainingAnyOfIterable } from '../../forArrays/assertArrayIsNotContainingAnyOfIterable';
import { assertSetIsNotContainingAnyOfIterable } from '../../forSets/assertSetIsNotContainingAnyOfIterable';
import { assertStringIsNotContainingAnyOfIterable } from '../../forStrings/assertStringIsNotContainingAnyOfIterable';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsNotContainingAnyOf = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: (string | TContent)[]
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsNotContainingAnyOfIterable(actual, expected as string[]);
  }
  if (isArray(actual)) {
    return assertArrayIsNotContainingAnyOfIterable(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsNotContainingAnyOfIterable(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsNotContainingAnyOf
};
