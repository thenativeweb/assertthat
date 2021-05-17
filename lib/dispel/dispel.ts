import { Ancestors } from './Ancestors';
import { dispelArray } from './dispelArray';
import { dispelError } from './dispelError';
import { dispelMap } from './dispelMap';
import { dispelObject } from './dispelObject';
import { dispelResult } from './dispelResult';
import { dispelSet } from './dispelSet';
import { isResult } from 'defekt';
import { isArray, isError, isMap, isObject, isSet } from 'typedescriptor';

const dispel = function (
  value: any,
  path = '/',
  ancestors: Ancestors = []
): any {
  if (isSet(value)) {
    return dispelSet(value, path, ancestors);
  }
  if (isMap(value)) {
    return dispelMap(value, path, ancestors);
  }
  if (isArray(value)) {
    return dispelArray(value, path, ancestors);
  }
  if (isResult(value)) {
    return dispelResult(value, path, ancestors);
  }
  if (isError(value)) {
    return dispelError(value, path, ancestors);
  }
  if (isObject(value)) {
    return dispelObject(value, path, ancestors);
  }

  return value;
};

export {
  dispel
};
