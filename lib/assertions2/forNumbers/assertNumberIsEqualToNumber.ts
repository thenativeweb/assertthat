import { AssertionFailed2 } from '../../errors';
import { compareNumbers } from '../../comparisons2/forNumbers/compareNumbers';
import { prettyPrintNumber } from '../../prettyPrint/forNumbers/prettyPrintNumber';
import { prettyPrintNumberDiff } from '../../prettyPrint/forNumbers/prettyPrintNumberDiff';
import { error, Result, value } from 'defekt';

const assertNumberIsEqualToNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed2> {
  const result = compareNumbers(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The numbers are not equal.',
    expected: prettyPrintNumber(expected),
    actual: prettyPrintNumber(actual),
    diff: prettyPrintNumberDiff(result)
  }));
};

export {
  assertNumberIsEqualToNumber
};
