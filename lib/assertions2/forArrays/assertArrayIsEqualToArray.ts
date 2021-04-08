import { AssertionFailed2 } from '../../errors';
import { compareArrays } from '../../comparisons2/forArrays/compareArrays';
import { prettyPrintArray } from '../../prettyPrint/forArrays/prettyPrintArray';
import { prettyPrintArrayDiff } from '../../prettyPrint/forArrays/prettyPrintArrayDiff';
import { error, Result, value } from 'defekt';

const assertArrayIsEqualToArray = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): Result<undefined, AssertionFailed2> {
  const result = compareArrays(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The arrays are not equal.',
    expected: prettyPrintArray(expected),
    actual: prettyPrintArray(actual),
    diff: prettyPrintArrayDiff(result)
  }));
};

export {
  assertArrayIsEqualToArray
};
