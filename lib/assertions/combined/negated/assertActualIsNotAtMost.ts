import { assertMapIsNotAtMostMap } from '../../forMaps/assertMapIsNotAtMostMap';
import { assertNumberIsNotAtMostNumber } from '../../forNumbers/assertNumberIsNotAtMostNumber';
import { assertObjectIsNotAtMostObject } from '../../forObjects/assertObjectIsNotAtMostObject';
import { assertSetIsNotAtMostSet } from '../../forSets/assertSetIsNotAtMostSet';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isMap, isNumber, isObject, isSet } from 'typedescriptor';

const assertActualIsNotAtMost = function <TKey, TContent>(
  actual: Map<TKey, TContent> | number | Set<TContent> | object,
  expected: Map<TKey, TContent> | number | Set<TContent> | object
): Result<undefined, AssertionFailed> {
  if (isMap(actual) && isMap(expected)) {
    return assertMapIsNotAtMostMap(actual, expected);
  }
  if (isNumber(actual) && isNumber(expected)) {
    return assertNumberIsNotAtMostNumber(actual, expected);
  }
  if (isSet(actual) && isSet(expected)) {
    return assertSetIsNotAtMostSet(actual, expected);
  }
  if (isObject(actual) && isObject(expected)) {
    return assertObjectIsNotAtMostObject(actual, expected);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsNotAtMost
};
