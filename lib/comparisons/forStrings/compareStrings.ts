import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { compareArrays } from '../forArrays/compareArrays';
import { InvalidOperation } from '../../errors';
import { unequalCharCost } from '../../constants/costs';
import {
  AdditionDiffSegment as AdditionStringDiffSegment,
  OmissionDiffSegment as OmissionStringDiffSegment
} from '../../diffs/forStrings/StringDiffSegment';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import {
  isAdditionDiffSegment as isAdditionArrayDiffSegment,
  isChangeDiffSegment as isChangeArrayDiffSegment,
  isEqualDiffSegment as isEqualArrayDiffSegment,
  isOmissionDiffSegment as isOmissionArrayDiffSegment
} from '../../diffs/forArrays/ArrayDiffSegment';
import { isStringDiff, stringDiff, StringDiff } from '../../diffs/forStrings/StringDiff';
import {intersperse} from "../../utils/intersperse";

const convertArrayDiffToStringDiff = function (arrayDiff: ArrayDiff<string>): StringDiff {
  const convertedStringDiff: StringDiff = stringDiff({
    segments: [],
    cost: 0
  });

  for (const arrayDiffSegment of arrayDiff.segments) {
    if (isEqualArrayDiffSegment(arrayDiffSegment)) {
      convertedStringDiff.segments.push({
        equal: arrayDiffSegment.equal.join(''),
        cost: arrayDiffSegment.cost
      });
    }
    if (isChangeArrayDiffSegment(arrayDiffSegment)) {
      const replaceSegment = {
        replace: '',
        replaceWith: '',
        cost: 0
      };

      for (const change of arrayDiffSegment.change) {
        if (!isStringDiff(change)) {
          throw new InvalidOperation('Tried to convert ArrayDiff with sub-diff to StringDiff.');
        }
        replaceSegment.replace += (change.segments[0] as AdditionStringDiffSegment).addition;
        replaceSegment.replaceWith += (change.segments[1] as OmissionStringDiffSegment).omission;
        replaceSegment.cost += change.cost;
      }
      convertedStringDiff.segments.push(replaceSegment);
    }
    if (isOmissionArrayDiffSegment(arrayDiffSegment)) {
      convertedStringDiff.segments.push({
        omission: arrayDiffSegment.omission.join(''),
        cost: arrayDiffSegment.cost
      });
    }
    if (isAdditionArrayDiffSegment(arrayDiffSegment)) {
      convertedStringDiff.segments.push({
        addition: arrayDiffSegment.addition.join(''),
        cost: arrayDiffSegment.cost
      });
    }
    convertedStringDiff.cost += arrayDiffSegment.cost;
  }

  return convertedStringDiff;
};

const softMaximumStringLengthForPreciseDiff = 300;

const compareStrings = function (
  actual: string,
  expected: string
): StringDiff | EqualDiff {
  if (actual === expected) {
    return equalDiff({
      value: actual
    });
  }

  let actualExploded = actual.split('');

  if (actualExploded.length > softMaximumStringLengthForPreciseDiff) {
    actualExploded = intersperse(actual.split(' '), ' ');
  }
  if (actualExploded.length > softMaximumStringLengthForPreciseDiff) {
    actualExploded = intersperse(actual.split('\n'), '\n');
  }

  let expectedExploded = expected.split('');

  if (expectedExploded.length > softMaximumStringLengthForPreciseDiff) {
    expectedExploded = intersperse(expected.split(' '), ' ');
  }
  if (expectedExploded.length > softMaximumStringLengthForPreciseDiff) {
    expectedExploded = intersperse(expected.split('\n'), '\n');
  }

  if (actualExploded.length <= 1 && expectedExploded.length <= 1) {
    return stringDiff({
      segments: [
        { addition: actual, cost: unequalCharCost / 2 },
        { omission: expected, cost: unequalCharCost / 2 }
      ],
      cost: unequalCharCost
    });
  }

  const result = compareArrays(actualExploded, expectedExploded);

  if (isEqualDiff(result)) {
    return equalDiff({
      value: actual
    });
  }

  return convertArrayDiffToStringDiff(result);
};

export {
  compareStrings
};
