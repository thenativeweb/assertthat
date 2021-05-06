import { ErrorDiff } from '../../diffs/forErrors/ErrorDiff';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';

const prettyPrintErrorDiff = function (diff: ErrorDiff, depth = 0): string {
  return `Error(${prettyPrintDiff(diff.objectDiff, depth)})`;
};

export {
  prettyPrintErrorDiff
};
