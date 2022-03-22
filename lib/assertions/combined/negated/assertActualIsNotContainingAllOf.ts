import { assertArrayIsNotContainingAllOfIterable } from '../../forArrays/assertArrayIsNotContainingAllOfIterable';
import { assertSetIsNotContainingAllOfIterable } from '../../forSets/assertSetIsNotContainingAllOfIterable';
import { assertStringIsNotContainingAllOfIterable } from '../../forStrings/assertStringIsNotContainingAllOfIterable';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsNotContainingAllOf = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: (string | TContent)[]
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsNotContainingAllOfIterable(actual, expected as string[]);
  }
  if (isArray(actual)) {
    return assertArrayIsNotContainingAllOfIterable(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsNotContainingAllOfIterable(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsNotContainingAllOf
};
