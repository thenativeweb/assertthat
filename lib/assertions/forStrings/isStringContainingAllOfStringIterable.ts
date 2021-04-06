import { AssertionFailed } from '../../errors';
import { contains } from '../../comparisons/forStrings/contains';
import { containsAllOf } from '../../comparisons/forStrings/containsAllOf';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringContainingAllOfStringIterable = function (
  actual: string,
  expected: Iterable<string>
): Result<undefined, AssertionFailed> {
  if (containsAllOf(actual, expected)) {
    return value();
  }

  const missingSubStrings: string[] = [];

  for (const potentialSubString of expected) {
    if (!contains(actual, potentialSubString)) {
      missingSubStrings.push(potentialSubString);
    }
  }

  return error(new AssertionFailed({
    message: 'The string is not containing all of the expected sub-strings.',
    data: {
      expected: stripIndents`
        To contain all of these sub-strings:
        ${[ ...expected ].join('\n')}
      `,
      actual,
      diff: `These sub-strings are missing:\n${missingSubStrings.join('\n')}`
    }
  }));
};

export {
  isStringContainingAllOfStringIterable
};
