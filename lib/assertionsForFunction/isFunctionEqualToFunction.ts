import { AssertionFailed } from '../errors';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionEqualToFunction = function (actual: Function, expected: Function): Result<undefined, AssertionFailed> {
  const actualSource = actual.toString();
  const expectedSource = expected.toString();

  if (actualSource === expectedSource) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are not equal.',
    data: {
      expected: expectedSource,
      actual: actualSource
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionEqualToFunction
};
