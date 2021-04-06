import { AssertionFailed } from '../../errors';
import { sameJsonAs } from '../../comparisons/forAny/sameJsonAs';
import { error, Result, value } from 'defekt';

const isNumberSameJsonAsNumber = function (
  actual: number,
  expected: number
): Result<undefined, AssertionFailed> {
  if (sameJsonAs(actual, expected)) {
    return value();
  }

  const actualJsonRepresentation = JSON.stringify(actual);
  const expectedJsonRepresentation = JSON.stringify(expected);

  return error(new AssertionFailed({
    message: 'The numbers do not have the same JSON representation.',
    data: {
      expected: `${expectedJsonRepresentation}`,
      actual: `${actualJsonRepresentation}`
    }
  }));
};

export {
  isNumberSameJsonAsNumber
};
