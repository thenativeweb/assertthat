import { AssertionFailed } from '../../errors';
import { endsWith } from '../../comparisons/forStrings/endsWith';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringEndingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (endsWith(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not ending with the expected sub-string.',
    data: {
      expected: stripIndent`
        To end with the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringEndingWithString
};
