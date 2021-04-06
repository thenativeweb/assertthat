import { AssertionFailed } from '../../errors';
import { sameJsonAs } from '../../comparisons/forAny/sameJsonAs';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const isStringNotSameJsonAsString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (!sameJsonAs(actual, expected)) {
    return value();
  }

  const actualJsonRepresentation = JSON.stringify(actual);
  const expectedJsonRepresentation = JSON.stringify(expected);

  return error(new AssertionFailed({
    message: 'The strings have the same JSON representation.',
    data: {
      expected: stripIndents`
        To not equal:
        ${expectedJsonRepresentation}
      `,
      actual: `${actualJsonRepresentation}`
    }
  }));
};

export {
  isStringNotSameJsonAsString
};
