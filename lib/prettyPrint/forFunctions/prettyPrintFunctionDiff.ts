import { FunctionDiff } from '../../diffs/forFunctions/FunctionDiff';
import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';

const prettyPrintFunctionDiff = function (
  diff: FunctionDiff
): string {
  return prettyPrintStringDiff(diff.stringRepresentationDiff).slice(1, -1);
};

export {
  prettyPrintFunctionDiff
};
