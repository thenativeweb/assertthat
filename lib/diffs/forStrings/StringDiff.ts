import { Diff } from '../Diff';
import { StringDiffSegment } from './StringDiffSegment';

const stringDiffSymbol: unique symbol = Symbol('string diff');

const stringDiff = function (
  parameters: Omit<StringDiff, 'kind'>
): StringDiff {
  return {
    kind: stringDiffSymbol,
    ...parameters
  };
};

interface StringDiff extends Diff {
  kind: typeof stringDiffSymbol;
  segments: StringDiffSegment[];
}

const isStringDiff = function (diff: any): diff is StringDiff {
  return 'kind' in diff && diff.kind === stringDiffSymbol;
};

export type {
  StringDiff
};

export {
  stringDiff,
  isStringDiff
};
