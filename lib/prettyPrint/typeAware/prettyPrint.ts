import { InvalidOperation } from '../../errors';
import { isArray } from '../../types/isArray';
import { isBoolean } from '../../types/isBoolean';
import { isFunction } from '../../types/isFunction';
import { isNumber } from '../../types/isNumber';
import { isObject } from '../../types/isObject';
import { isRecursion } from '../../types/Recursion';
import { isResult } from 'defekt';
import { isString } from '../../types/isString';
import { isSymbol } from '../../types/isSymbol';
import { prettyPrintArray } from '../forArrays/prettyPrintArray';
import { prettyPrintBoolean } from '../forBooleans/prettyPrintBoolean';
import { prettyPrintFunction } from '../forFunctions/prettyPrintFunction';
import { prettyPrintNumber } from '../forNumbers/prettyPrintNumber';
import { prettyPrintObject } from '../forObjects/prettyPrintObject';
import { prettyPrintRecursion } from '../forRecursions/prettyPrintRecursion';
import { prettyPrintResult } from '../forResults/prettyPrintResult';
import { prettyPrintString } from '../forStrings/prettyPrintString';
import { prettyPrintSymbol } from '../forSymbols/prettyPrintSymbol';

const prettyPrint = function (value: any, depth = 0): string {
  if (isRecursion(value)) {
    return prettyPrintRecursion(value);
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

  throw new InvalidOperation('Could not pretty print a value with unknown type.');
};

export {
  prettyPrint
};
