import { assertMapIsAtMostMap } from '../forMaps/assertMapIsAtMostMap';
import { assertNumberIsAtMostNumber } from '../forNumbers/assertNumberIsAtMostNumber';
import { assertObjectIsAtMostObject } from '../forObjects/assertObjectIsAtMostObject';
import { assertSetIsAtMostSet } from '../forSets/assertSetIsAtMostSet';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isMap, isNumber, isObject, isSet } from 'typedescriptor';

const assertActualIsAtMost = function <TKey, TContent>(
  actual: Map<TKey, TContent> | number | Set<TContent> | object,
  expected: Map<TKey, TContent> | number | Set<TContent> | object
): Result<undefined, AssertionFailed> {
  if (isMap(actual) && isMap(expected)) {
    return assertMapIsAtMostMap(actual, expected);
  }
  if (isNumber(actual) && isNumber(expected)) {
    return assertNumberIsAtMostNumber(actual, expected);
  }
  if (isSet(actual) && isSet(expected)) {
    return assertSetIsAtMostSet(actual, expected);
  }
  if (isObject(actual) && isObject(expected)) {
    return assertObjectIsAtMostObject(actual, expected);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsAtMost
};
