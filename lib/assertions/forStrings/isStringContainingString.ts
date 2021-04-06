import { AssertionFailed } from '../../errors';
import { contains } from '../../comparisons/forStrings/contains';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringContainingString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (contains(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not containing the expected sub-string.',
    data: {
      expected: stripIndent`
        To contain the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringContainingString
};
