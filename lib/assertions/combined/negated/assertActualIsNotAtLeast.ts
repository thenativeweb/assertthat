import { assertMapIsNotAtLeastMap } from '../../forMaps/assertMapIsNotAtLeastMap';
import { assertNumberIsNotAtLeastNumber } from '../../forNumbers/assertNumberIsNotAtLeastNumber';
import { assertObjectIsNotAtLeastObject } from '../../forObjects/assertObjectIsNotAtLeastObject';
import { assertSetIsNotAtLeastSet } from '../../forSets/assertSetIsNotAtLeastSet';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isMap, isNumber, isObject, isSet } from 'typedescriptor';

const assertActualIsNotAtLeast = function <TKey, TContent>(
  actual: Map<TKey, TContent> | number | Set<TContent> | object,
  expected: Map<TKey, TContent> | number | Set<TContent> | object
): Result<undefined, AssertionFailed> {
  if (isMap(actual) && isMap(expected)) {
    return assertMapIsNotAtLeastMap(actual, expected);
  }
  if (isNumber(actual) && isNumber(expected)) {
    return assertNumberIsNotAtLeastNumber(actual, expected);
  }
  if (isSet(actual) && isSet(expected)) {
    return assertSetIsNotAtLeastSet(actual, expected);
  }
  if (isObject(actual) && isObject(expected)) {
    return assertObjectIsNotAtLeastObject(actual, expected);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsNotAtLeast
};

