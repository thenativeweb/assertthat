import { assertArrayIsContainingAnyOfIterable } from '../forArrays/assertArrayIsContainingAnyOfIterable';
import { assertSetIsContainingAnyOfIterable } from '../forSets/assertSetIsContainingAnyOfIterable';
import { assertStringIsContainingAnyOfIterable } from '../forStrings/assertStringIsContainingAnyOfIterable';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsContainingAnyOf = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: (string | TContent)[]
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsContainingAnyOfIterable(actual, expected as string[]);
  }
  if (isArray(actual)) {
    return assertArrayIsContainingAnyOfIterable(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsContainingAnyOfIterable(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsContainingAnyOf
};
