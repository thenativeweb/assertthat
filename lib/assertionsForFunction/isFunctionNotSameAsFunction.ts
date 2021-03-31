import { AssertionFailed } from '../errors';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotSameAsFunction = function (actual: Function, expected: Function): Result<undefined, AssertionFailed> {
  if (actual !== expected) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are the same.'
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotSameAsFunction
};
