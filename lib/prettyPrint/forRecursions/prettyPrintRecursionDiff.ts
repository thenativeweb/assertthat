import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';
import { RecursionDiff } from '../../diffs/forRecursions/RecursionDiff';

const prettyPrintRecursionDiff = function (diff: RecursionDiff): string {
  return `Recursion(${prettyPrintStringDiff(diff.recursionPathDiff)})`;
};

export {
  prettyPrintRecursionDiff
};
