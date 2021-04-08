import { AssertionFailed2 } from '../../errors';
import { compareStrings } from '../../comparisons2/forStrings/compareStrings';
import { prettyPrintString } from '../../prettyPrint/forStrings/prettyPrintString';
import { prettyPrintStringDiff } from '../../prettyPrint/forStrings/prettyPrintStringDiff';
import { error, Result, value } from 'defekt';

const assertStringIsEqualToString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed2> {
  const result = compareStrings(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The strings are not equal.',
    expected: prettyPrintString(expected),
    actual: prettyPrintString(actual),
    diff: prettyPrintStringDiff(result)
  }));
};

export {
  assertStringIsEqualToString
};
