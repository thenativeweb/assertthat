import { AssertionFailed2 } from '../../errors';
import { compareNumbers } from '../../comparisons2/forNumbers/compareNumbers';
import { prettyPrintNumber } from '../../prettyPrint/forNumbers/prettyPrintNumber';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const assertNumberIsNotEqualToNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed2> {
  const result = compareNumbers(actual, expected);

  if (result.cost !== 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The numbers are equal.',
    expected: stripIndents`
      To not equal:
      ${prettyPrintNumber(expected)}
    `
  }));
};

export {
  assertNumberIsNotEqualToNumber
};
