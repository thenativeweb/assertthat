import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import chalk from 'chalk';
import { diffString } from '../utils/diffString';
import { InvalidOperation } from '../../errors';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { isAdditionDiffSegment, isChangeDiffSegment, isEqualDiffSegment, isOmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';

const prettyPrintArrayDiff = function (diff: ArrayDiff<any>, depth = 0): string {
  if (diff.segments.length === 0) {
    return '[]';
  }

  const content = diff.segments.flatMap(
    (segment): string[] => {
      if (isEqualDiffSegment(segment)) {
        return segment.equal.flatMap(
          (value): string[] => `${prettyPrint(value, depth + 1)},`.
            split('\n').
            map(
              (line): string => `  ${line}`
            )
        );
      }
      if (isChangeDiffSegment(segment)) {
        return segment.change.flatMap(
          (change): string[] => `${prettyPrintDiff(change, depth + 1)},`.
            split('\n').
            map(
              (line, index): string => index === 0 ? `* ${line}` : `  ${line}`
            )
        );
      }
      if (isOmissionDiffSegment(segment)) {
        return segment.omission.flatMap(
          (value): string[] => `${prettyPrint(value, depth + 1)},`.
            split('\n').
            map(
              (line, index): string => index === 0 ? chalk.green(`+ ${line}`) : `  ${chalk.green(line)}`
            )
        );
      }
      if (isAdditionDiffSegment(segment)) {
        return segment.addition.flatMap(
          (value): string[] => `${prettyPrint(value, depth + 1)},`.
            split('\n').
            map(
              (line, index): string => index === 0 ? chalk.red(`- ${line}`) : `  ${chalk.red(line)}`
            )
        );
      }
      throw new InvalidOperation();
    }
  );

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

  if (depth >= 2) {
    return `[ ${content.join(' ')} ]`;
  }

  return diffString`
    [
      ${content}
    ]
  `;
};

export {
  prettyPrintArrayDiff
};
