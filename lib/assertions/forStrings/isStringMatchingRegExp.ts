import { AssertionFailed } from '../../errors';
import { matches } from '../../comparisons/forStrings/matches';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringMatchingRegExp = function (
  actual: string,
  expected: RegExp
): Result<undefined, AssertionFailed> {
  if (matches(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not matching the RegExp.',
    data: {
      expected: stripIndent`
        To match the RegExp:
        ${expected}
      `,
      actual
    }
  }));
};

export {
  isStringMatchingRegExp
};
