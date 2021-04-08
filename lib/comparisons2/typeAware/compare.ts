import { blank } from '../../constants/blank';
import { compareArrays } from '../forArrays/compareArrays';
import { compareBooleans } from '../forBooleans/compareBooleans';
import { compareNumbers } from '../forNumbers/compareNumbers';
import { compareStrings } from '../forStrings/compareStrings';
import { Diff } from '../../diffs/Diff';
import { incompatibleTypeDiff } from '../../diffs/IncompatibleTypeDiff';
import { incompatibleTypesCost } from '../../constants/costs';
import { isArray } from '../../typeRecognition/isArray';
import { isBoolean } from '../../typeRecognition/isBoolean';
import { isNumber } from '../../typeRecognition/isNumber';
import { isString } from '../../typeRecognition/isString';

const compare = function (actual: any, expected: any): Diff {
  if ((isArray(actual) || actual === blank) && (isArray(expected) || expected === blank)) {
    return compareArrays(actual, expected);
  }
  if ((isNumber(actual) || actual === blank) && (isNumber(expected) || expected === blank)) {
    return compareNumbers(actual, expected);
  }
  if ((isString(actual) || actual === blank) && (isString(expected) || expected === blank)) {
    return compareStrings(actual, expected);
  }
  if ((isBoolean(actual) || actual === blank) && (isBoolean(expected) || expected === blank)) {
    return compareBooleans(actual, expected);
  }

  return incompatibleTypeDiff({
    actual,
    expected,
    cost: incompatibleTypesCost
  });
};

export {
  compare
};
