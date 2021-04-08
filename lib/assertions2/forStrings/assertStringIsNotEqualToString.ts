import { AssertionFailed2 } from '../../errors';
import { compareStrings } from '../../comparisons2/forStrings/compareStrings';
import { prettyPrintString } from '../../prettyPrint/forStrings/prettyPrintString';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const assertStringIsNotEqualToString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed2> {
  const result = compareStrings(actual, expected);

  if (result.cost !== 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The strings are equal.',
    expected: stripIndents`
      To not equal:
      ${prettyPrintString(expected)}
    `
  }));
};

export {
  assertStringIsNotEqualToString
};
