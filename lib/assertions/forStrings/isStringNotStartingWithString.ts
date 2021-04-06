import { AssertionFailed } from '../../errors';
import { startsWith } from '../../comparisons/forStrings/startsWith';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotStartingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!startsWith(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is starting with the not expected sub-string.',
    data: {
      expected: stripIndent`
        To not start with the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringNotStartingWithString
};
