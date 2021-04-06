import { AssertionFailed } from '../../errors';
import { contains } from '../../comparisons/forStrings/contains';
import { containsAnyOf } from '../../comparisons/forStrings/containsAnyOf';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotContainingAnyOfStringIterable = function (
  actual: string,
  expected: Iterable<string>
): Result<undefined, AssertionFailed> {
  if (!containsAnyOf(actual, expected)) {
    return value();
  }

  const containedSubStrings: string[] = [];

  for (const potentialSubString of expected) {
    if (contains(actual, potentialSubString)) {
      containedSubStrings.push(potentialSubString);
    }
  }

  return error(new AssertionFailed({
    message: 'The string is containing any of the not expected sub-strings.',
    data: {
      expected: stripIndents`
        To not contain any of these sub-strings:
        ${[ ...expected ].join('\n')}
      `,
      actual,
      diff: stripIndents`
        These sub-strings are contained:
        ${containedSubStrings.join('\n')}
      `
    }
  }));
};

export {
  isStringNotContainingAnyOfStringIterable
};
