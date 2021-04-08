import { Diff } from './Diff';

const incompatibleTypeDiffSymbol: unique symbol = Symbol('incompatible type diff');

const incompatibleTypeDiff = function (
  parameters: Omit<IncompatibleTypeDiff, 'kind'>
): IncompatibleTypeDiff {
  return {
    kind: incompatibleTypeDiffSymbol,
    ...parameters
  };
};

interface IncompatibleTypeDiff extends Diff {
  kind: typeof incompatibleTypeDiffSymbol;
  actual: any;
  expected: any;
}

const isIncompatibleTypeDiff = function (diff: any): diff is IncompatibleTypeDiff {
  return 'kind' in diff && diff.kind === incompatibleTypeDiffSymbol;
};

export type {
  IncompatibleTypeDiff
};

export {
  incompatibleTypeDiff,
  isIncompatibleTypeDiff
};
