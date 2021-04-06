import { AssertionFailed } from '../../errors';
import { contains } from '../../comparisons/forStrings/contains';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotContainingString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!contains(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is containing the not expected sub-string.',
    data: {
      expected: stripIndent`
        To not contain the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringNotContainingString
};
