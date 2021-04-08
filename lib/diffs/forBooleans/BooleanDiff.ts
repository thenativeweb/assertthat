import { Diff } from '../Diff';

const booleanDiffSymbol: unique symbol = Symbol('boolean diff');

const booleanDiff = function (
  parameters: Omit<BooleanDiff, 'kind'>
): BooleanDiff {
  return {
    kind: booleanDiffSymbol,
    ...parameters
  };
};

interface BooleanDiff extends Diff {
  kind: typeof booleanDiffSymbol;
  cost: number;
  actual?: boolean;
  expected?: boolean;
}

const isBooleanDiff = function (diff: any): diff is BooleanDiff {
  return 'kind' in diff && diff.kind === booleanDiffSymbol;
};

export type {
  BooleanDiff
};

export {
  booleanDiff,
  isBooleanDiff
};
