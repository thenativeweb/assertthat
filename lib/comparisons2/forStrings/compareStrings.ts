import { ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { compareArrays } from '../forArrays/compareArrays';
import { InvalidOperation } from '../../errors';
import { unequalCharCost } from '../../constants/costs';
import {
  AdditionDiffSegment as AdditionStringDiffSegment,
  OmissionDiffSegment as OmissionStringDiffSegment
} from '../../diffs/forStrings/StringDiffSegment';
import {
  isAdditionDiffSegment as isAdditionArrayDiffSegment,
  isChangeDiffSegment as isChangeArrayDiffSegment,
  isEqualDiffSegment as isEqualArrayDiffSegment,
  isOmissionDiffSegment as isOmissionArrayDiffSegment
} from '../../diffs/forArrays/ArrayDiffSegment';
import { isStringDiff, stringDiff, StringDiff } from '../../diffs/forStrings/StringDiff';

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
        omission: arrayDiffSegment.addition.join(''),
        cost: arrayDiffSegment.cost
      });
    }
    convertedStringDiff.cost += arrayDiffSegment.cost;
  }

  return convertedStringDiff;
};

const compareStrings = function (
  actual: string,
  expected: string
): StringDiff {
  if (actual === expected) {
    return stringDiff({
      segments: [],
      cost: 0
    });
  }
  if (actual.length === 1 && expected.length === 1) {
    return stringDiff({
      segments: [
        { addition: actual, cost: unequalCharCost / 2 },
        { omission: expected, cost: unequalCharCost / 2 }
      ],
      cost: unequalCharCost
    });
  }

  const actualExploded = actual.split('');
  const expectedExploded = expected.split('');

  const result = compareArrays(actualExploded, expectedExploded);

  if (result.cost === 0) {
    return stringDiff({
      segments: [],
      cost: 0
    });
  }

  return convertArrayDiffToStringDiff(result);
};

export {
  compareStrings
};
