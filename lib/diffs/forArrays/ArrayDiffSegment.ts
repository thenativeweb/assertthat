import { Diff } from '../Diff';

interface EqualDiffSegment<TContent> extends Diff {
  equal: TContent[];
}
interface ChangeDiffSegment extends Diff {
  change: Diff[];
}
interface OmissionDiffSegment<TContent> extends Diff {
  omission: TContent[];
}
interface AdditionDiffSegment<TContent> extends Diff {
  addition: TContent[];
}

type ArrayDiffSegment<TContent> =
    EqualDiffSegment<TContent> |
    ChangeDiffSegment |
    OmissionDiffSegment<TContent> |
    AdditionDiffSegment<TContent>;

const isEqualDiffSegment = function <TContent>(
  value: ArrayDiffSegment<TContent>
): value is EqualDiffSegment<TContent> {
  return 'equal' in value;
};

const isChangeDiffSegment = function <TContent>(
  value: ArrayDiffSegment<TContent>
): value is ChangeDiffSegment {
  return 'change' in value;
};

const isOmissionDiffSegment = function <TContent>(
  value: ArrayDiffSegment<TContent>
): value is OmissionDiffSegment<TContent> {
  return 'omission' in value;
};

const isAdditionDiffSegment = function <TContent>(
  value: ArrayDiffSegment<TContent>
): value is AdditionDiffSegment<TContent> {
  return 'addition' in value;
};

export type {
  EqualDiffSegment,
  ChangeDiffSegment,
  OmissionDiffSegment,
  AdditionDiffSegment,
  ArrayDiffSegment
};

export {
  isEqualDiffSegment,
  isChangeDiffSegment,
  isOmissionDiffSegment,
  isAdditionDiffSegment
};
