import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import chalk from 'chalk';
import { InvalidOperation } from '../../errors';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { source } from 'common-tags';
import { isAdditionDiffSegment, isChangeDiffSegment, isEqualDiffSegment, isOmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';

const prettyPrintArrayDiff = function (diff: ArrayDiff<any>, depth = 0): string {
  const content = diff.segments.flatMap(
    (segment, index, arr): string[] => {
      let prettyValues: string[];

      if (isEqualDiffSegment(segment)) {
        prettyValues = segment.equal.flatMap((value): string[] => prettyPrint(value, depth + 1).split('\n'));
      } else if (isChangeDiffSegment(segment)) {
        prettyValues = segment.change.flatMap((change): string[] => prettyPrintDiff(change, depth + 1).split('\n'));
      } else if (isOmissionDiffSegment(segment)) {
        prettyValues = segment.omission.flatMap((value): string[] => chalk.red(prettyPrint(value, depth + 1)).split('\n'));
      } else if (isAdditionDiffSegment(segment)) {
        prettyValues = segment.addition.flatMap((value): string[] => chalk.green(prettyPrint(value, depth + 1)).split('\n'));
      } else {
        throw new InvalidOperation();
      }

      if (index < arr.length - 1 && prettyValues.length > 0) {
        prettyValues[prettyValues.length - 1] += ',';
      }

      return prettyValues;
    }
  );

  if (depth >= 2) {
    return `[ ${content.join(' ')} ]`;
  }

  return source`
    [
      ${content}
    ]
  `;
};

export {
  prettyPrintArrayDiff
};
