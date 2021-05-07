import { AssertionFailed } from '../../errors';
import { error, Result, value } from 'defekt';

const assertActualIsNotSameJsonAsExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const actualJson = JSON.stringify(actual);
  const expectedJson = JSON.stringify(expected);

  if (actualJson !== expectedJson) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The values have the same JSON representation.',
    expected: `Not to equal:\n${expectedJson}`
  }));
};

export {
  assertActualIsNotSameJsonAsExpected
};
