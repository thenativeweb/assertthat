import { InvalidOperation } from '../../errors';
import { isArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { isBooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import { isFunctionDiff } from '../../diffs/forFunctions/FunctionDiff';
import { isIncompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { isNumberDiff } from '../../diffs/forNumbers/NumberDiff';
import { isObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { isRecursionDiff } from '../../diffs/forRecursions/RecursionDiff';
import { isResultDiff } from '../../diffs/forResults/ResultDiff';
import { isStringDiff } from '../../diffs/forStrings/StringDiff';
import { isSymbolDiff } from '../../diffs/forSymbols/SymbolDiff';
import { prettyPrintArrayDiff } from '../forArrays/prettyPrintArrayDiff';
import { prettyPrintBooleanDiff } from '../forBooleans/prettyPrintBooleanDiff';
import { prettyPrintFunctionDiff } from '../forFunctions/prettyPrintFunctionDiff';
import { prettyPrintIncompatibleTypeDiff } from './prettyPrintIncompatibleTypeDiff';
import { prettyPrintNumberDiff } from '../forNumbers/prettyPrintNumberDiff';
import { prettyPrintObjectDiff } from '../forObjects/prettyPrintObjectDiff';
import { prettyPrintRecursionDiff } from '../forRecursions/prettyPrintRecursionDiff';
import { prettyPrintResultDiff } from '../forResults/prettyPrintResultDiff';
import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';
import { prettyPrintSymbolDiff } from '../forSymbols/prettyPrintSymbolDiff';

const prettyPrintDiff = function (diff: any, depth = 0): string {
  if (isRecursionDiff(diff)) {
    return prettyPrintRecursionDiff(diff);
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
    return prettyPrintObjectDiff(diff);
  }
  if (isIncompatibleTypeDiff(diff)) {
    return prettyPrintIncompatibleTypeDiff(diff, depth);
  }

  throw new InvalidOperation('Could not pretty print a diff with unknown type.');
};

export {
  prettyPrintDiff
};
