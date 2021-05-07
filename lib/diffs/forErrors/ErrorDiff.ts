import { Diff } from '../Diff';
import { ObjectDiff } from '../forObjects/ObjectDiff';

const errorDiffSymbol: unique symbol = Symbol('error diff');

const errorDiff = function (
  parameters: Omit<ErrorDiff, 'kind'>
): ErrorDiff {
  return {
    kind: errorDiffSymbol,
    ...parameters
  };
};

interface ErrorDiff extends Diff {
  kind: typeof errorDiffSymbol;
  objectDiff: ObjectDiff;
}

const isErrorDiff = function (diff: any): diff is ErrorDiff {
  return 'kind' in diff && diff.kind === errorDiffSymbol;
};

export type {
  ErrorDiff
};

export {
  isErrorDiff,
  errorDiff
};
