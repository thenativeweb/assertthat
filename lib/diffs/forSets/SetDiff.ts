import { Diff } from '../Diff';

const setDiffSymbol: unique symbol = Symbol('set diff');

const setDiff = function (
  parameters: Omit<SetDiff, 'kind'>
): SetDiff {
  return {
    kind: setDiffSymbol,
    ...parameters
  };
};

interface SetDiff extends Diff {
  kind: typeof setDiffSymbol;
  additions: Set<any>;
  omissions: Set<any>;
  equal: Set<any>;
}

const isSetDiff = function (diff: any): diff is SetDiff {
  return 'kind' in diff && diff.kind === setDiffSymbol;
};

export type {
  SetDiff
};

export {
  isSetDiff,
  setDiff
};
