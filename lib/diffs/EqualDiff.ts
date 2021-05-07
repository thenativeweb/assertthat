import { Diff } from './Diff';

const equalDiffSymbol: unique symbol = Symbol('equal diff');

const equalDiff = function (
  parameters: Omit<EqualDiff, 'kind' | 'cost'>
): EqualDiff {
  return {
    kind: equalDiffSymbol,
    cost: 0,
    ...parameters
  };
};

interface EqualDiff extends Diff {
  kind: typeof equalDiffSymbol;
  value: any;
}

const isEqualDiff = function (diff: any): diff is EqualDiff {
  return 'kind' in diff && diff.kind === equalDiffSymbol;
};

export type {
  EqualDiff
};

export {
  isEqualDiff,
  equalDiff
};
