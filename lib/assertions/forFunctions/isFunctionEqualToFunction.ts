import { AssertionFailed } from '../../errors';
import { equalTo } from '../../comparisons/forFunctions/equalTo';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionEqualToFunction = function (
  actual: Function,
  expected: Function
): Result<undefined, AssertionFailed> {
  if (equalTo(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are not equal.',
    data: {
      expected: expected.toString(),
      actual: actual.toString()
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionEqualToFunction
};
