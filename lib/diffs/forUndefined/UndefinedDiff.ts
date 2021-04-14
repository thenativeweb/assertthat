import { Diff } from '../Diff';

const undefinedDiffSymbol: unique symbol = Symbol('undefined diff');

const undefinedDiff = function (): UndefinedDiff {
  return {
    kind: undefinedDiffSymbol,
    cost: 0
  };
};

interface UndefinedDiff extends Diff {
  kind: typeof undefinedDiffSymbol;
}

const isUndefinedDiff = function (diff: any): diff is UndefinedDiff {
  return 'kind' in diff && diff.kind === undefinedDiffSymbol;
};

export type {
  UndefinedDiff
};

export {
  isUndefinedDiff,
  undefinedDiff
};
