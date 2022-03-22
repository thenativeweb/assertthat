import { assertArrayIsNotContainingItem } from '../../forArrays/assertArrayIsNotContainingItem';
import { assertSetIsNotContainingItem } from '../../forSets/assertSetIsNotContainingItem';
import { assertStringIsNotContainingString } from '../../forStrings/assertStringIsNotContainingString';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isArray, isSet, isString } from 'typedescriptor';

const assertActualIsNotContaining = function <TContent>(
  actual: string | TContent[] | Set<TContent>,
  expected: string | TContent
): Result<undefined, AssertionFailed> {
  if (isString(actual)) {
    return assertStringIsNotContainingString(actual, expected as string);
  }
  if (isArray(actual)) {
    return assertArrayIsNotContainingItem(actual, expected);
  }
  if (isSet(actual)) {
    return assertSetIsNotContainingItem(actual, expected);
  }
  throw new InvalidOperation();
};

export {
  assertActualIsNotContaining
};
