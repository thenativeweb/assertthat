import { Ancestors } from './Ancestors';
import { dispelArray } from './dispelArray';
import { dispelMap } from './dispelMap';
import { dispelObject } from './dispelObject';
import { dispelResult } from './dispelResult';
import { dispelSet } from './dispelSet';
import { isArray } from '../types/isArray';
import { isMap } from '../types/isMap';
import { isObject } from '../types/isObject';
import { isResult } from 'defekt';
import { isSet } from '../types/isSet';

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
  if (isObject(value)) {
    return dispelObject(value, path, ancestors);
  }

  return value;
};

export {
  dispel
};
