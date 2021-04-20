import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import chalk from 'chalk';
import { InvalidOperation } from '../../errors';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { source } from 'common-tags';
import { isAdditionDiffSegment, isChangeDiffSegment, isEqualDiffSegment, isOmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';

const prettyPrintArrayDiff = function (diff: ArrayDiff<any>, depth = 0): string {
  if (diff.segments.length === 0) {
    return '[]';
  }

  const content = diff.segments.flatMap(
    (segment): string[] => {
      let prettyValuesLines: string[];

      if (isEqualDiffSegment(segment)) {
        prettyValuesLines = segment.equal.flatMap((value): string[] => `${prettyPrint(value, depth + 1)},`.split('\n'));
      } else if (isChangeDiffSegment(segment)) {
        prettyValuesLines = segment.change.flatMap((change): string[] => `${prettyPrintDiff(change, depth + 1)},`.split('\n'));
      } else if (isOmissionDiffSegment(segment)) {
        prettyValuesLines = segment.omission.flatMap((value): string[] => chalk.red(`${prettyPrint(value, depth + 1)},`).split('\n'));
      } else if (isAdditionDiffSegment(segment)) {
        prettyValuesLines = segment.addition.flatMap((value): string[] => chalk.green(`${prettyPrint(value, depth + 1)},`).split('\n'));
      } else {
        throw new InvalidOperation();
      }

      return prettyValuesLines;
    }
  );

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

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
