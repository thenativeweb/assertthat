import { assertArrayIsContainingAllOfIterable } from '../forArrays/assertArrayIsContainingAllOfIterable';
import { assertSetIsContainingAllOfIterable } from '../forSets/assertSetIsContainingAllOfIterable';
import { assertStringIsContainingAllOfIterable } from '../forStrings/assertStringIsContainingAllOfIterable';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsContainingAllOf = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: (string | TContent)[]
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsContainingAllOfIterable(actual, expected as string[]);
  }
  if (isArray(actual)) {
    return assertArrayIsContainingAllOfIterable(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsContainingAllOfIterable(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsContainingAllOf
};
