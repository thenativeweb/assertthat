import { AssertionFailed } from '../../errors';
import { containsAllOf } from '../../comparisons/forStrings/containsAllOf';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotContainingAllOfStringIterable = function (
  actual: string,
  expected: Iterable<string>
): Result<undefined, AssertionFailed> {
  if (!containsAllOf(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The string is containing all of the not expected sub-strings.',
    data: {
      expected: stripIndents`
        To contain none of these sub-strings:
        ${[ ...expected ].join('\n')}
      `,
      actual
    }
  }));
};

export {
  isStringNotContainingAllOfStringIterable
};
