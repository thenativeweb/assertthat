import { arraySize } from '../forArrays/arraySize';
import { errorSize } from '../forErrors/errorSize';
import { isArray } from '../../types/isArray';
import { isMap } from '../../types/isMap';
import { isObject } from '../../types/isObject';
import { isSet } from '../../types/isSet';
import { mapSize } from '../forMaps/mapSize';
import { objectSize } from '../forObjects/objectSize';
import { resultSize } from '../forResults/resultSize';
import { setSize } from '../forSets/setSize';
import { isError, isResult } from 'defekt';

const size = function (value: any): number {
  if (isArray(value)) {
    return arraySize(value);
  }
  if (isSet(value)) {
    return setSize(value);
  }
  if (isMap(value)) {
    return mapSize(value);
  }
  if (isObject(value)) {
    return objectSize(value);
  }
  if (isResult(value)) {
    return resultSize(value);
  }
  if (isError(value)) {
    return errorSize(value);
  }

  return 1;
};

export {
  size
};
