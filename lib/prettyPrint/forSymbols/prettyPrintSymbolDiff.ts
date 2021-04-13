import { prettyPrintStringDiff } from '../forStrings/prettyPrintStringDiff';
import { SymbolDiff } from '../../diffs/forSymbols/SymbolDiff';

const prettyPrintSymbolDiff = function (
  diff: SymbolDiff
): string {
  return `Symbol(${prettyPrintStringDiff(diff.descriptionDifference)})`;
};

export {
  prettyPrintSymbolDiff
};
