import { AssertionFailed } from '../../errors';
import { containsAnyOf } from '../../comparisons/forStrings/containsAnyOf';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringContainingAnyOfStringIterable = function (
  actual: string,
  expected: Iterable<string>
): Result<undefined, AssertionFailed> {
  if (containsAnyOf(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is not containing any of the expected sub-strings.',
    data: {
      expected: stripIndents`
        To contain any of these sub-strings:
        ${[ ...expected ].join('\n')}
      `,
      actual
    }
  }));
};

export {
  isStringContainingAnyOfStringIterable
};
