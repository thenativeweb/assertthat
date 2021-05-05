import { Diff } from '../Diff';
import { findAdditions } from '../findAdditions';
import { sum } from '../../utils/sum';
import { arrayDiff, ArrayDiff } from './ArrayDiff';
import {
  ArrayDiffSegment,
  isChangeDiffSegment,
  isEqualDiffSegment,
  isOmissionDiffSegment
} from './ArrayDiffSegment';

const findArrayDiffAdditions = function (diff: ArrayDiff<any>): ArrayDiff<any> {
  let removedCost = 0;

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
      (segment): boolean => {
        if (isEqualDiffSegment(segment) || isOmissionDiffSegment(segment) || segment.cost === 0) {
          removedCost += segment.cost;

          return false;
        }

        return true;
      }
    );

  return arrayDiff({
    cost: diff.cost - removedCost,
    segments: filteredSegments
  });
};

export {
  findArrayDiffAdditions
};
