import { AssertionFailed2 } from '../../errors';
import { compareBooleans } from '../../comparisons2/forBooleans/compareBooleans';
import { prettyPrintBoolean } from '../../prettyPrint/forBooleans/prettyPrintBoolean';
import { prettyPrintBooleanDiff } from '../../prettyPrint/forBooleans/prettyPrintBooleanDiff';
import { error, Result, value } from 'defekt';

const assertBooleanIsEqualToBoolean = function (
  actual: boolean,
  expected: boolean
): Result<undefined, AssertionFailed2> {
  const result = compareBooleans(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The booleans are not equal.',
    expected: prettyPrintBoolean(expected),
    actual: prettyPrintBoolean(actual),
    diff: prettyPrintBooleanDiff(result)
  }));
};

export {
  assertBooleanIsEqualToBoolean
};
