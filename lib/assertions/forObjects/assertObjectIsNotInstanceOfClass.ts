import { AssertionFailed } from '../../errors';
import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertObjectIsNotInstanceOfClass = function (
  actual: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  expected: Function
): Result<undefined, AssertionFailed> {
  if (!(actual instanceof expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The object is an instance of the class.',
    actual: prettyPrint(dispel(actual)),
    expected: `To not be an instance of:\n${expected.name}`
  }));
};

export {
  assertObjectIsNotInstanceOfClass
};
