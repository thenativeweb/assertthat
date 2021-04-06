import { AssertionFailed } from '../../errors';
import { sameJsonAs } from '../../comparisons/forAny/sameJsonAs';
import { error, Result, value } from 'defekt';

const isBooleanSameJsonAsBoolean = function (
  actual: boolean,
  expected: boolean
): Result<undefined, AssertionFailed> {
  if (sameJsonAs(actual, expected)) {
    return value();
  }

  const actualJsonRepresentation = JSON.stringify(actual);
  const expectedJsonRepresentation = JSON.stringify(expected);

  return error(new AssertionFailed({
    message: 'The booleans do not have the same JSON representation.',
    data: {
      expected: `${expectedJsonRepresentation}`,
      actual: `${actualJsonRepresentation}`
    }
  }));
};

export {
  isBooleanSameJsonAsBoolean
};
