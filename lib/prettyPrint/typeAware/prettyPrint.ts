import { InvalidOperation } from '../../errors';
import { isArray } from '../../types/isArray';
import { isBoolean } from '../../types/isBoolean';
import { isError } from '../../types/isError';
import { isFunction } from '../../types/isFunction';
import { isMap } from '../../types/isMap';
import { isNull } from '../../types/isNull';
import { isNumber } from '../../types/isNumber';
import { isObject } from '../../types/isObject';
import { isRecursion } from '../../types/Recursion';
import { isResult } from 'defekt';
import { isSet } from '../../types/isSet';
import { isString } from '../../types/isString';
import { isSymbol } from '../../types/isSymbol';
import { isUndefined } from '../../types/isUndefined';
import { prettyPrintArray } from '../forArrays/prettyPrintArray';
import { prettyPrintBoolean } from '../forBooleans/prettyPrintBoolean';
import { prettyPrintError } from '../forErrors/prettyPrintError';
import { prettyPrintFunction } from '../forFunctions/prettyPrintFunction';
import { prettyPrintMap } from '../forMaps/prettyPrintMap';
import { prettyPrintNull } from '../forNull/prettyPrintNull';
import { prettyPrintNumber } from '../forNumbers/prettyPrintNumber';
import { prettyPrintObject } from '../forObjects/prettyPrintObject';
import { prettyPrintRecursion } from '../forRecursions/prettyPrintRecursion';
import { prettyPrintResult } from '../forResults/prettyPrintResult';
import { prettyPrintSet } from '../forSets/prettyPrintSet';
import { prettyPrintString } from '../forStrings/prettyPrintString';
import { prettyPrintSymbol } from '../forSymbols/prettyPrintSymbol';
import { prettyPrintUndefined } from '../forUndefined/prettyPrintUndefined';

const prettyPrint = function (value: any, depth = 0): string {
  if (isRecursion(value)) {
    return prettyPrintRecursion(value);
  }
  if (isError(value)) {
    return prettyPrintError(value);
  }
  if (isSet(value)) {
    return prettyPrintSet(value);
  }
  if (isMap(value)) {
    return prettyPrintMap(value);
  }
  if (isArray(value)) {
    return prettyPrintArray(value, depth);
  }
  if (isResult(value)) {
    return prettyPrintResult(value, depth);
  }
  if (isNumber(value)) {
    return prettyPrintNumber(value);
  }
  if (isString(value)) {
    return prettyPrintString(value);
  }
  if (isBoolean(value)) {
    return prettyPrintBoolean(value);
  }
  if (isSymbol(value)) {
    return prettyPrintSymbol(value);
  }
  if (isFunction(value)) {
    return prettyPrintFunction(value);
  }
  if (isObject(value)) {
    return prettyPrintObject(value, depth);
  }
  if (isUndefined(value)) {
    return prettyPrintUndefined(value);
  }
  if (isNull(value)) {
    return prettyPrintNull(value);
  }

  throw new InvalidOperation('Could not pretty print a value with unknown type.');
};

export {
  prettyPrint
};
