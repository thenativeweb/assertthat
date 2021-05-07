import { Diff } from '../Diff';
import { findAdditions } from '../findAdditions';
import { sum } from '../../utils/sum';
import { arrayDiff, ArrayDiff } from './ArrayDiff';
import {
  ArrayDiffSegment, isAdditionDiffSegment,
  isChangeDiffSegment,
  isEqualDiffSegment
} from './ArrayDiffSegment';

const findArrayDiffAdditions = function (diff: ArrayDiff<any>): ArrayDiff<any> {
  const filteredSegments = diff.segments.
    map((segment: ArrayDiffSegment<any>): ArrayDiffSegment<any> => {
      if (isChangeDiffSegment(segment)) {
        const newSegmentContent = segment.change.
          map((change): Diff => findAdditions(change)).
          filter((change): boolean => change.cost > 0);
        const newCost = sum(newSegmentContent.map((change): number => change.cost));

        return {
          change: newSegmentContent,
          cost: newCost
        };
      }

      return segment;
    }).
    filter(
      (segment): boolean =>
        !isEqualDiffSegment(segment) &&
          !isAdditionDiffSegment(segment) &&
          segment.cost > 0
    );

  return arrayDiff({
    cost: sum(filteredSegments.map((segment): number => segment.cost)),
    segments: filteredSegments
  });
};

export {
  findArrayDiffAdditions
};
