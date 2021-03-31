import { AssertionFailed } from '../errors';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotEqualToFunction = function (
  actual: Function,
  expected: Function
): Result<undefined, AssertionFailed> {
  const actualSource = actual.toString();
  const expectedSource = expected.toString();

  if (actualSource !== expectedSource) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are equal.',
    data: {
      expected: `Not to equal:\n${expectedSource}`,
      actual: actualSource
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotEqualToFunction
};
