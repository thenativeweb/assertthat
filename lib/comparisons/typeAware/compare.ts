import { compareArrays } from '../forArrays/compareArrays';
import { compareBooleans } from '../forBooleans/compareBooleans';
import { compareFunctions } from '../forFunctions/compareFunctions';
import { compareMaps } from '../forMaps/compareMaps';
import { compareNumbers } from '../forNumbers/compareNumbers';
import { compareObjects } from '../forObjects/compareObjects';
import { compareRecursions } from '../forRecursions/compareRecursions';
import { compareResults } from '../forResults/compareResults';
import { compareSets } from '../forSets/compareSets';
import { compareStrings } from '../forStrings/compareStrings';
import { compareSymbols } from '../forSymbols/compareSymbols';
import { compareUndefined } from '../forUndefined/compareUndefined';
import { Diff } from '../../diffs/Diff';
import { incompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { incompatibleTypesCost } from '../../constants/costs';
import { isArray } from '../../types/isArray';
import { isBoolean } from '../../types/isBoolean';
import { isFunction } from '../../types/isFunction';
import { isMap } from '../../types/isMap';
import { isNumber } from '../../types/isNumber';
import { isObject } from '../../types/isObject';
import { isRecursion } from '../../types/Recursion';
import { isResult } from 'defekt';
import { isSet } from '../../types/isSet';
import { isString } from '../../types/isString';
import { isSymbol } from '../../types/isSymbol';
import { isUndefined } from '../../types/isUndefined';

const compare = function (actual: any, expected: any): Diff {
  if (isRecursion(actual) && isRecursion(expected)) {
    return compareRecursions(actual, expected);
  }
  if (isSet(actual) && isSet(expected)) {
    return compareSets(actual, expected);
  }
  if (isMap(actual) && isMap(expected)) {
    return compareMaps(actual, expected);
  }
  if (isArray(actual) && isArray(expected)) {
    return compareArrays(actual, expected);
  }
  if (isResult(actual) && isResult(expected)) {
    return compareResults(actual, expected);
  }
  if (isNumber(actual) && isNumber(expected)) {
    return compareNumbers(actual, expected);
  }
  if (isString(actual) && isString(expected)) {
    return compareStrings(actual, expected);
  }
  if (isBoolean(actual) && isBoolean(expected)) {
    return compareBooleans(actual, expected);
  }
  if (isSymbol(actual) && isSymbol(expected)) {
    return compareSymbols(actual, expected);
  }
  if (isFunction(actual) && isFunction(expected)) {
    return compareFunctions(actual, expected);
  }
  if (isObject(actual) && isObject(expected)) {
    return compareObjects(actual, expected);
  }
  if (isUndefined(actual) && isUndefined(expected)) {
    return compareUndefined(actual, expected);
  }

  return incompatibleTypeDiff({
    actual,
    expected,
    cost: incompatibleTypesCost
  });
};

export {
  compare
};
