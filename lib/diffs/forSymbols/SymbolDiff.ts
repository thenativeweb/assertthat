import { Diff } from '../Diff';
import { StringDiff } from '../forStrings/StringDiff';

const symbolDiffSymbol: unique symbol = Symbol('symbol diff');

const symbolDiff = function (
  parameters: Omit<SymbolDiff, 'kind'>
): SymbolDiff {
  return {
    kind: symbolDiffSymbol,
    ...parameters
  };
};

interface SymbolDiff extends Diff {
  kind: typeof symbolDiffSymbol;
  descriptionDiff: StringDiff;
}

const isSymbolDiff = function (diff: any): diff is SymbolDiff {
  return 'kind' in diff && diff.kind === symbolDiffSymbol;
};

export type {
  SymbolDiff
};

export {
  isSymbolDiff,
  symbolDiff
};
