import { Diff } from '../Diff';

const numberDiffSymbol: unique symbol = Symbol('number diff');

const numberDiff = function (
  parameters: Omit<NumberDiff, 'kind'>
): NumberDiff {
  return {
    kind: numberDiffSymbol,
    ...parameters
  };
};

interface NumberDiff extends Diff {
  kind: typeof numberDiffSymbol;
  actual?: number;
  expected?: number;
  difference: number;
}

const isNumberDiff = function (diff: any): diff is NumberDiff {
  return 'kind' in diff && diff.kind === numberDiffSymbol;
};

export type {
  NumberDiff
};

export {
  isNumberDiff,
  numberDiff
};
