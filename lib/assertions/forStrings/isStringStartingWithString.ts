import { AssertionFailed } from '../../errors';
import { startsWith } from '../../comparisons/forStrings/startsWith';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringStartingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (startsWith(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not starting with the expected sub-string.',
    data: {
      expected: stripIndent`
        To start with the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringStartingWithString
};
