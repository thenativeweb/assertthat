import { AssertionFailed } from '../../errors';
import { equalTo } from '../../comparisons/forFunctions/equalTo';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotEqualToFunction = function (
  actual: Function,
  expected: Function
): Result<undefined, AssertionFailed> {
  if (!equalTo(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are equal.',
    data: {
      expected: `Not to equal:\n${expected.toString()}`,
      actual: actual.toString()
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotEqualToFunction
};
