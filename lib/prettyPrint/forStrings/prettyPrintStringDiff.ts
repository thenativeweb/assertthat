import chalk from 'chalk';
import { StringDiff } from '../../diffs/forStrings/StringDiff';
import { isAdditionDiffSegment, isEqualDiffSegment, isOmissionDiffSegment, isReplaceDiffSegment } from '../../diffs/forStrings/StringDiffSegment';

const prettyPrintStringDiff = function (diff: StringDiff): string {
  let result = '';

  for (const segment of diff.segments) {
    if (isEqualDiffSegment(segment)) {
      result += segment.equal;
    }
    if (isReplaceDiffSegment(segment)) {
      result += `${chalk.green(segment.replace)}${chalk.red(segment.replaceWith)}`;
    }
    if (isOmissionDiffSegment(segment)) {
      result += chalk.red(segment.omission);
    }
    if (isAdditionDiffSegment(segment)) {
      result += chalk.green(segment.addition);
    }
  }

  return result;
};

export {
  prettyPrintStringDiff
};
