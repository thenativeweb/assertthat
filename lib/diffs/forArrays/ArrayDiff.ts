import { ArrayDiffSegment } from './ArrayDiffSegment';
import { Diff } from '../Diff';

const arrayDiffSymbol: unique symbol = Symbol('array diff');

const arrayDiff = function <TContent>(
  parameters: Omit<ArrayDiff<TContent>, 'kind'>
): ArrayDiff<TContent> {
  return {
    kind: arrayDiffSymbol,
    ...parameters
  };
};

interface ArrayDiff<TContent> extends Diff {
  kind: typeof arrayDiffSymbol;
  segments: ArrayDiffSegment<TContent>[];
}

const isArrayDiff = function (diff: any): diff is ArrayDiff<any> {
  return 'kind' in diff && diff.kind === arrayDiffSymbol;
};

export type {
  ArrayDiff
};

export {
  arrayDiff,
  isArrayDiff
};
