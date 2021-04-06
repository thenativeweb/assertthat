import { AssertionFailed } from '../../errors';
import { endsWith } from '../../comparisons/forStrings/endsWith';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotEndingWithString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!endsWith(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is ending with the not expected sub-string.',
    data: {
      expected: stripIndent`
        To not end with the sub-string:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringNotEndingWithString
};
