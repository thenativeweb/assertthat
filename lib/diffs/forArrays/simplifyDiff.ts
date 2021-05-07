import { arrayDiff, ArrayDiff } from './ArrayDiff';
import { isAdditionDiffSegment, isChangeDiffSegment, isEqualDiffSegment, isOmissionDiffSegment } from './ArrayDiffSegment';

const simplifyDiff = function <TContent>(
  diff: ArrayDiff<TContent>
): ArrayDiff<TContent> {
  if (diff.segments.length === 0) {
    return diff;
  }

  const newDiff: ArrayDiff<TContent> = arrayDiff({
    segments: [ diff.segments[0] ],
    cost: diff.segments[0].cost
  });

  for (const currentSegment of diff.segments.slice(1)) {
    const previousSegment = newDiff.segments.slice(-1)[0];

    if (isEqualDiffSegment(currentSegment) && isEqualDiffSegment(previousSegment)) {
      previousSegment.equal = [ ...previousSegment.equal, ...currentSegment.equal ];
      previousSegment.cost += currentSegment.cost;
    } else if (isChangeDiffSegment(currentSegment) && isChangeDiffSegment(previousSegment)) {
      previousSegment.change = [ ...previousSegment.change, ...currentSegment.change ];
      previousSegment.cost += currentSegment.cost;
    } else if (isOmissionDiffSegment(currentSegment) && isOmissionDiffSegment(previousSegment)) {
      previousSegment.omission = [ ...previousSegment.omission, ...currentSegment.omission ];
      previousSegment.cost += currentSegment.cost;
    } else if (isAdditionDiffSegment(currentSegment) && isAdditionDiffSegment(previousSegment)) {
      previousSegment.addition = [ ...previousSegment.addition, ...currentSegment.addition ];
      previousSegment.cost += currentSegment.cost;
    } else {
      newDiff.segments.push(currentSegment);
    }

    newDiff.cost += currentSegment.cost;
  }

  return newDiff;
};

export {
  simplifyDiff
};
