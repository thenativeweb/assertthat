import { assertMapIsAtLeastMap } from '../forMaps/assertMapIsAtLeastMap';
import { assertNumberIsAtLeastNumber } from '../forNumbers/assertNumberIsAtLeastNumber';
import { assertObjectIsAtLeastObject } from '../forObjects/assertObjectIsAtLeastObject';
import { assertSetIsAtLeastSet } from '../forSets/assertSetIsAtLeastSet';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isMap, isNumber, isObject, isSet } from 'typedescriptor';

const assertActualIsAtLeast = function <TKey, TContent>(
  actual: Map<TKey, TContent> | number | Set<TContent> | object,
  expected: Map<TKey, TContent> | number | Set<TContent> | object
): Result<undefined, AssertionFailed> {
  if (isMap(actual) && isMap(expected)) {
    return assertMapIsAtLeastMap(actual, expected);
  }
  if (isNumber(actual) && isNumber(expected)) {
    return assertNumberIsAtLeastNumber(actual, expected);
  }
  if (isSet(actual) && isSet(expected)) {
    return assertSetIsAtLeastSet(actual, expected);
  }
  if (isObject(actual) && isObject(expected)) {
    return assertObjectIsAtLeastObject(actual, expected);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsAtLeast
};

