import { assertArrayIsContainingItem } from '../forArrays/assertArrayIsContainingItem';
import { assertSetIsContainingItem } from '../forSets/assertSetIsContainingItem';
import { assertStringIsContainingString } from '../forStrings/assertStringIsContainingString';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsContaining = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: string | TContent
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsContainingString(actual, expected as string);
  }
  if (isArray(actual)) {
    return assertArrayIsContainingItem(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsContainingItem(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsContaining
};
