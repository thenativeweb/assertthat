import { assertArrayIsEmpty } from '../forArrays/assertArrayIsEmpty';
import { assertMapIsEmpty } from '../forMaps/assertMapIsEmpty';
import { assertObjectIsEmpty } from '../forObjects/assertObjectIsEmpty';
import { assertSetIsEmpty } from '../forSets/assertSetIsEmpty';
import { assertStringIsEmpty } from '../forStrings/assertStringIsEmpty';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { isArray, isMap, isObject, isSet, isString } from 'typedescriptor';

const assertActualIsEmpty = function <TContent>(
  actual: TContent[] | Map<any, TContent> | Set<TContent> | string | object
): Result<undefined, AssertionFailed> {
  if (isArray(actual)) {
    return assertArrayIsEmpty(actual);
  }
  if (isMap(actual)) {
    return assertMapIsEmpty(actual);
  }
  if (isSet(actual)) {
    return assertSetIsEmpty(actual);
  }
  if (isString(actual)) {
    return assertStringIsEmpty(actual);
  }
  if (isObject(actual)) {
    return assertObjectIsEmpty(actual);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsEmpty
};
