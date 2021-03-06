import { InvalidOperation } from '../../errors';
import { isRecursion } from '../../types/Recursion';
import { isResult } from 'defekt';
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
import { isArray, isBoolean, isError, isFunction, isMap, isNull, isNumber, isObject, isSet, isString, isSymbol, isUndefined } from 'typedescriptor';

const prettyPrint = function (value: any, depth = 0): string {
  if (isRecursion(value)) {
    return prettyPrintRecursion(value);
  }
  if (isError(value)) {
    return prettyPrintError(value, depth);
  }
  if (isSet(value)) {
    return prettyPrintSet(value, depth);
  }
  if (isMap(value)) {
    return prettyPrintMap(value, depth);
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
