import { InvalidOperation } from '../../errors';
import { isArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { isBooleanDiff } from '../../diffs/forBooleans/BooleanDiff';
import { isIncompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { isNumberDiff } from '../../diffs/forNumbers/NumberDiff';
import { isStringDiff } from '../../diffs/forStrings/StringDiff';
import { prettyPrintArrayDiff } from '../forArrays/prettyPrintArrayDiff';
import { prettyPrintBooleanDiff } from '../forBooleans/prettyPrintBooleanDiff';
import { prettyPrintIncompatibleTypeDiff } from './prettyPrintIncompatibleTypeDiff';
import { prettyPrintNumberDiff } from '../forNumbers/prettyPrintNumberDiff';
import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';

const prettyPrintDiff = function (diff: any, depth = 0): string {
  if (isArrayDiff(diff)) {
    return prettyPrintArrayDiff(diff, depth);
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
  if (isIncompatibleTypeDiff(diff)) {
    return prettyPrintIncompatibleTypeDiff(diff, depth);
  }

  console.log({ diff });
  throw new InvalidOperation('Could not pretty print a diff with unknown type.');
};

export {
  prettyPrintDiff
};
