import { dispel } from '../../dispel/dispel';
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
  const dispelledValue = dispel(value);

  if (isRecursion(value)) {
    return prettyPrintRecursion(dispelledValue);
  }
  if (isError(value)) {
    return prettyPrintError(dispelledValue, depth);
  }
  if (isSet(value)) {
    return prettyPrintSet(dispelledValue, depth);
  }
  if (isMap(value)) {
    return prettyPrintMap(dispelledValue, depth);
  }
  if (isArray(value)) {
    return prettyPrintArray(dispelledValue, depth);
  }
  if (isResult(value)) {
    return prettyPrintResult(dispelledValue, depth);
  }
  if (isNumber(value)) {
    return prettyPrintNumber(dispelledValue);
  }
  if (isString(value)) {
    return prettyPrintString(dispelledValue);
  }
  if (isBoolean(value)) {
    return prettyPrintBoolean(dispelledValue);
  }
  if (isSymbol(value)) {
    return prettyPrintSymbol(dispelledValue);
  }
  if (isFunction(value)) {
    return prettyPrintFunction(dispelledValue);
  }
  if (isObject(value)) {
    return prettyPrintObject(dispelledValue, depth);
  }
  if (isUndefined(value)) {
    return prettyPrintUndefined(dispelledValue);
  }
  if (isNull(value)) {
    return prettyPrintNull(dispelledValue);
  }

  throw new InvalidOperation('Could not pretty print a value with unknown type.');
};

export {
  prettyPrint
};
