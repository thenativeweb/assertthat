import { AssertionFailed } from '../errors';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionSameAsFunction = function (actual: Function, expected: Function): Result<undefined, AssertionFailed> {
  if (actual === expected) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are not the same.',
    data: {
      formattedMessage: `The functions are not the same.`
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionSameAsFunction
};
