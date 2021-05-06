import { Diff } from '../Diff';
import { StringDiff } from '../forStrings/StringDiff';

const functionDiffSymbol: unique symbol = Symbol('function diff');

const functionDiff = function (
  parameters: Omit<FunctionDiff, 'kind'>
): FunctionDiff {
  return {
    kind: functionDiffSymbol,
    ...parameters
  };
};

interface FunctionDiff extends Diff {
  kind: typeof functionDiffSymbol;
  stringRepresentationDiff: StringDiff;
}

const isFunctionDiff = function (diff: any): diff is FunctionDiff {
  return 'kind' in diff && diff.kind === functionDiffSymbol;
};

export type {
  FunctionDiff
};

export {
  functionDiff,
  isFunctionDiff
};
