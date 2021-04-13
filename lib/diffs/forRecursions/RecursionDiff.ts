import { Diff } from '../Diff';
import { StringDiff } from '../forStrings/StringDiff';

const recursionDiffSymbol: unique symbol = Symbol('recursion diff');

const recursionDiff = function (
  parameters: Omit<RecursionDiff, 'kind'>
): RecursionDiff {
  return {
    kind: recursionDiffSymbol,
    ...parameters
  };
};

interface RecursionDiff extends Diff {
  kind: typeof recursionDiffSymbol;
  recursionPathDiff: StringDiff;
}

const isRecursionDiff = function (diff: any): diff is RecursionDiff {
  return 'kind' in diff && diff.kind === recursionDiffSymbol;
};

export type {
  RecursionDiff
};

export {
  isRecursionDiff,
  recursionDiff
};
