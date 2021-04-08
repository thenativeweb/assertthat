import { isResult } from 'defekt';
import { isSet } from './typeRecognition/isSet';
import { assertthatForArray, AssertthatForArray } from './assertthatForArray';
import { assertthatForBoolean, AssertthatForBoolean } from './assertthatForBoolean';
import { assertthatForFunction, AssertthatForFunction } from './assertthatForFunction';
import { assertthatForMap, AssertthatForMap } from './assertthatForMap';
import { assertthatForNumber, AssertthatForNumber } from './assertthatForNumber';
import { assertthatForObject, AssertthatForObject } from './assertthatForObject';
import { assertthatForResult, AssertthatForResult } from './assertthatForResult';
import { assertthatForSet, AssertthatForSet } from './assertthatForSet';
import { assertthatForString, AssertthatForString } from './assertthatForString';
import { assertthatForSymbol, AssertthatForSymbol } from './assertthatForSymbol';
import * as errors from './errors';

type AssertThat =
  AssertthatForNumber &
  AssertthatForString &
  AssertthatForBoolean &
  AssertthatForSet &
  AssertthatForMap &
  AssertthatForResult &
  AssertthatForArray &
  AssertthatForSymbol &
  AssertthatForFunction &
  AssertthatForObject;

// eslint-disable-next-line consistent-this
const that: AssertThat = (actual: any): any => {
  if (isSet(actual)) {
    return assertthatForSet(actual);
  }
  if (actual instanceof Map) {
    return assertthatForMap(actual);
  }
  if (Array.isArray(actual)) {
    return assertthatForArray(actual);
  }
  if (isResult(actual)) {
    return assertthatForResult(actual);
  }
  if (typeof actual === 'number') {
    return assertthatForNumber(actual);
  }
  if (typeof actual === 'string') {
    return assertthatForString(actual);
  }
  if (typeof actual === 'boolean') {
    return assertthatForBoolean(actual);
  }
  if (typeof actual === 'symbol') {
    return assertthatForSymbol(actual);
  }
  if (typeof actual === 'function') {
    return assertthatForFunction(actual);
  }
  if (typeof actual === 'object') {
    return assertthatForObject(actual);
  }

  throw new errors.InvalidOperation();
};

const assert = {
  that
};

export {
  assert
};
