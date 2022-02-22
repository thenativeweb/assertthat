import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertObjectIsInstanceOfClass = function (
  actual: object,
  expected: (...args: any[]) => any
): Result<undefined, AssertionFailed> {
  if (actual instanceof expected) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The object is not an instance of the expected class.',
    actual: prettyPrint(dispel(actual)),
    expected: `To be an instance of:\n${expected.name}`
  }));
};

export {
  assertObjectIsInstanceOfClass
};
