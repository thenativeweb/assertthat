import { InvalidOperation } from '../../errors';
import { isArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { isBooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { isErrorDiff } from '../../diffs/forErrors/ErrorDiff';
import { isFunctionDiff } from '../../diffs/forFunctions/FunctionDiff';
import { isIncompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { isMapDiff } from '../../diffs/forMaps/MapDiff';
import { isNumberDiff } from '../../diffs/forNumbers/NumberDiff';
import { isObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { isRecursionDiff } from '../../diffs/forRecursions/RecursionDiff';
import { isResultDiff } from '../../diffs/forResults/ResultDiff';
import { isSetDiff } from '../../diffs/forSets/SetDiff';
import { isStringDiff } from '../../diffs/forStrings/StringDiff';
import { isSymbolDiff } from '../../diffs/forSymbols/SymbolDiff';
import { prettyPrintArrayDiff } from '../forArrays/prettyPrintArrayDiff';
import { prettyPrintBooleanDiff } from '../forBooleans/prettyPrintBooleanDiff';
import { prettyPrintEqualDiff } from '../prettyPrintEqualDiff';
import { prettyPrintErrorDiff } from '../forErrors/prettyPrintErrorDiff';
import { prettyPrintFunctionDiff } from '../forFunctions/prettyPrintFunctionDiff';
import { prettyPrintIncompatibleTypeDiff } from './prettyPrintIncompatibleTypeDiff';
import { prettyPrintMapDiff } from '../forMaps/prettyPrintMapDiff';
import { prettyPrintNumberDiff } from '../forNumbers/prettyPrintNumberDiff';
import { prettyPrintObjectDiff } from '../forObjects/prettyPrintObjectDiff';
import { prettyPrintRecursionDiff } from '../forRecursions/prettyPrintRecursionDiff';
import { prettyPrintResultDiff } from '../forResults/prettyPrintResultDiff';
import { prettyPrintSetDiff } from '../forSets/prettyPrintSetDiff';
import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';
import { prettyPrintSymbolDiff } from '../forSymbols/prettyPrintSymbolDiff';

const prettyPrintDiff = function (diff: any, depth = 0): string {
  if (isEqualDiff(diff)) {
    return prettyPrintEqualDiff(diff);
  }
  if (isRecursionDiff(diff)) {
    return prettyPrintRecursionDiff(diff);
  }
  if (isErrorDiff(diff)) {
    return prettyPrintErrorDiff(diff, depth);
  }
  if (isSetDiff(diff)) {
    return prettyPrintSetDiff(diff, depth);
  }
  if (isMapDiff(diff)) {
    return prettyPrintMapDiff(diff, depth);
  }
  if (isArrayDiff(diff)) {
    return prettyPrintArrayDiff(diff, depth);
  }
  if (isResultDiff(diff)) {
    return prettyPrintResultDiff(diff, depth);
  }
  if (isNumberDiff(diff)) {
    return prettyPrintNumberDiff(diff);
  }
  if (isStringDiff(diff)) {
    return prettyPrintStringDiff(diff);
  }
  if (isBooleanDiff(diff)) {
    return prettyPrintBooleanDiff(diff);
  }
  if (isSymbolDiff(diff)) {
    return prettyPrintSymbolDiff(diff);
  }
  if (isFunctionDiff(diff)) {
    return prettyPrintFunctionDiff(diff);
  }
  if (isObjectDiff(diff)) {
    return prettyPrintObjectDiff(diff, depth);
  }
  if (isIncompatibleTypeDiff(diff)) {
    return prettyPrintIncompatibleTypeDiff(diff, depth);
  }

  throw new InvalidOperation('Could not pretty print a diff with unknown type.');
};

export {
  prettyPrintDiff
};
