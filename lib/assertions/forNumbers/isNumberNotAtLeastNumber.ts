import { AssertionFailed } from '../../errors';
import { atLeast } from '../../comparisons/forNumbers/atLeast';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isNumberNotAtLeastNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!atLeast(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is at least the expected value.',
    data: {
      expected: stripIndents`
        To not be at least:
        ${expected}
      `,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotAtLeastNumber
};