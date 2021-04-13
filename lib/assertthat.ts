import { isArray } from './types/isArray';
import { isBoolean } from './types/isBoolean';
import { isFunction } from './types/isFunction';
import { isMap } from './types/isMap';
import { isNumber } from './types/isNumber';
import { isObject } from './types/isObject';
import { isResult } from 'defekt';
import { isSet } from './types/isSet';
import { isString } from './types/isString';
import { isSymbol } from './types/isSymbol';
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
  if (isMap(actual)) {
    return assertthatForMap(actual);
  }
  if (isArray(actual)) {
    return assertthatForArray(actual);
  }
  if (isResult(actual)) {
    return assertthatForResult(actual);
  }
  if (isNumber(actual)) {
    return assertthatForNumber(actual);
  }
  if (isString(actual)) {
    return assertthatForString(actual);
  }
  if (isBoolean(actual)) {
    return assertthatForBoolean(actual);
  }
  if (isSymbol(actual)) {
    return assertthatForSymbol(actual);
  }
  if (isFunction(actual)) {
    return assertthatForFunction(actual);
  }
  if (isObject(actual)) {
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
