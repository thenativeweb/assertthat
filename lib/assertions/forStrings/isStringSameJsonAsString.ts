import { AssertionFailed } from '../../errors';
import { sameJsonAs } from '../../comparisons/forAny/sameJsonAs';
import { error, Result, value } from 'defekt';

const isStringSameJsonAsString = function (
  actual: string,
  expected: string
): Result<undefined, AssertionFailed> {
  if (sameJsonAs(actual, expected)) {
    return value();
  }

  const actualJsonRepresentation = JSON.stringify(actual);
  const expectedJsonRepresentation = JSON.stringify(expected);

  return error(new AssertionFailed({
    message: 'The strings do not have the same JSON representation.',
    data: {
      expected: `${expectedJsonRepresentation}`,
      actual: `${actualJsonRepresentation}`
    }
  }));
};

export {
  isStringSameJsonAsString
};
