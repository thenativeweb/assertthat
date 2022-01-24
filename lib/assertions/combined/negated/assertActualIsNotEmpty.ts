import { assertArrayIsNotEmpty } from '../../forArrays/assertArrayIsNotEmpty';
import { assertMapIsNotEmpty } from '../../forMaps/assertMapIsNotEmpty';
import { assertObjectIsNotEmpty } from '../../forObjects/assertObjectIsNotEmpty';
import { assertSetIsNotEmpty } from '../../forSets/assertSetIsNotEmpty';
import { assertStringIsNotEmpty } from '../../forStrings/assertStringIsNotEmpty';
import { Result } from 'defekt';
import { AssertionFailed, InvalidOperation } from '../../../errors';
import { isArray, isMap, isObject, isSet, isString } from 'typedescriptor';

const assertActualIsNotEmpty = function <TContent>(
  actual: TContent[] | Map<any, TContent> | Set<TContent> | string | object
): Result<undefined, AssertionFailed> {
  if (isArray(actual)) {
    return assertArrayIsNotEmpty(actual);
  }
  if (isMap(actual)) {
    return assertMapIsNotEmpty(actual);
  }
  if (isSet(actual)) {
    return assertSetIsNotEmpty(actual);
  }
  if (isString(actual)) {
    return assertStringIsNotEmpty(actual);
  }
  if (isObject(actual)) {
    return assertObjectIsNotEmpty(actual);
  }

  throw new InvalidOperation();
};

export {
  assertActualIsNotEmpty
};
