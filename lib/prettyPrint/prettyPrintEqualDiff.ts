import { EqualDiff } from '../diffs/EqualDiff';
import { prettyPrint } from './typeAware/prettyPrint';

const prettyPrintEqualDiff = function (diff: EqualDiff): string {
  return prettyPrint(diff.value);
};

export {
  prettyPrintEqualDiff
};
