import { AssertionFailed } from '../../errors';
import { sameAs } from '../../comparisons/forAny/sameAs';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isNumberNotEqualToNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (!sameAs(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The numbers are equal.',
    data: {
      expected: stripIndents`
        To not equal:
        ${expected}
      `,
      actual: `${actual}`
    }
  }));
};

export {
  isNumberNotEqualToNumber
};
