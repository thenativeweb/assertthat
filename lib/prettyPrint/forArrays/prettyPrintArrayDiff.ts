import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumDepth } from '../../constants/maximumDepth';
import { prepareAddition } from '../utils/prepareAddition';
import { prepareChange } from '../utils/prepareChange';
import { prepareOmission } from '../utils/prepareOmission';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { propagateDiffSymbols } from '../utils/propagateDiffSymbols';
import { isAdditionDiffSegment, isChangeDiffSegment, isEqualDiffSegment, isOmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';

const prettyPrintArrayDiff = function (diff: ArrayDiff<any>, depth = 0): string {
  if (diff.segments.length === 0) {
    return '[]';
  }

  const content: string[][] = [];

  for (const segment of diff.segments) {
    if (isEqualDiffSegment(segment)) {
      for (const value of segment.equal) {
        content.push(prepareSimple(
          prettyPrint(value, depth + 1),
          depth
        ));
      }
    } else if (isChangeDiffSegment(segment)) {
      for (const subDiff of segment.change) {
        content.push(prepareChange(
          prettyPrintDiff(subDiff, depth + 1),
          depth
        ));
      }
    } else if (isOmissionDiffSegment(segment)) {
      for (const value of segment.omission) {
        content.push(prepareOmission(
          prettyPrint(value, depth + 1),
          depth
        ));
      }
    } else if (isAdditionDiffSegment(segment)) {
      for (const value of segment.addition) {
        content.push(prepareAddition(
          prettyPrint(value, depth + 1),
          depth
        ));
      }
    }
  }

  if (depth >= maximumDepth) {
    return formatNestedArray`[ ${content} ]`;
  }

  return propagateDiffSymbols(formatNestedArray`
    [
    ${content}
    ]
  `);
};

export {
  prettyPrintArrayDiff
};
