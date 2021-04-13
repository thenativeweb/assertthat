import { AssertionFailed2 } from '../../errors';
import { compareObjects } from '../../comparisons2/forObjects/compareObjects';
import { prettyPrintObject } from '../../prettyPrint/forObjects/prettyPrintObject';
import { prettyPrintObjectDiff } from '../../prettyPrint/forObjects/prettyPrintObjectDiff';
import { error, Result, value } from 'defekt';

const assertObjectIsEqualToObject = function (
  actual: object,
  expected: object
): Result<undefined, AssertionFailed2> {
  const result = compareObjects(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The objects are not equal.',
    expected: prettyPrintObject(expected),
    actual: prettyPrintObject(actual),
    diff: prettyPrintObjectDiff(result)
  }));
};

export {
  assertObjectIsEqualToObject
};
