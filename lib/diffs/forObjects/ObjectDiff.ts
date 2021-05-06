import { Diff } from '../Diff';

const objectDiffSymbol: unique symbol = Symbol('object diff');

const objectDiff = function (
  parameters: Omit<ObjectDiff, 'kind'>
): ObjectDiff {
  return {
    kind: objectDiffSymbol,
    ...parameters
  };
};

interface ObjectDiff extends Diff {
  kind: typeof objectDiffSymbol;
  additions: Record<any, any>;
  omissions: Record<any, any>;
  changes: Record<any, Diff>;
  equal: Record<any, any>;
}

const isObjectDiff = function (diff: any): diff is ObjectDiff {
  return 'kind' in diff && diff.kind === objectDiffSymbol;
};

export type {
  ObjectDiff
};

export {
  isObjectDiff,
  objectDiff
};
