import { AssertionFailed } from '../../errors';
import { atMost } from '../../comparisons/forNumbers/atMost';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isNumberNotAtMostNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!atMost(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The number is at most the expected value.',
    data: {
      expected: stripIndents`
        To not be at most:
        ${expected}
      `,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotAtMostNumber
};