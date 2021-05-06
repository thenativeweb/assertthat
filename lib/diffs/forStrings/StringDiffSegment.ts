import { Diff } from '../Diff';

interface EqualDiffSegment extends Diff {
  equal: string;
}

interface ReplaceDiffSegment extends Diff {
  replace: string;
  replaceWith: string;
}

interface OmissionDiffSegment extends Diff {
  omission: string;
}

interface AdditionDiffSegment extends Diff {
  addition: string;
}

type StringDiffSegment =
    EqualDiffSegment |
    ReplaceDiffSegment |
    OmissionDiffSegment |
    AdditionDiffSegment;

const isEqualDiffSegment = function (
  value: StringDiffSegment
): value is EqualDiffSegment {
  return 'equal' in value;
};

const isReplaceDiffSegment = function (
  value: StringDiffSegment
): value is ReplaceDiffSegment {
  return 'replace' in value && 'replaceWith' in value;
};

const isOmissionDiffSegment = function (
  value: StringDiffSegment
): value is OmissionDiffSegment {
  return 'omission' in value;
};

const isAdditionDiffSegment = function (
  value: StringDiffSegment
): value is AdditionDiffSegment {
  return 'addition' in value;
};

export type {
  EqualDiffSegment,
  ReplaceDiffSegment,
  OmissionDiffSegment,
  AdditionDiffSegment,
  StringDiffSegment
};

export {
  isEqualDiffSegment,
  isReplaceDiffSegment,
  isOmissionDiffSegment,
  isAdditionDiffSegment
};
