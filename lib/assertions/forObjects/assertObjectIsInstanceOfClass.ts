import { AssertionFailed } from '../../errors';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertObjectIsInstanceOfClass = function (
  actual: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  expected: Function
): Result<undefined, AssertionFailed> {
  if (actual instanceof expected) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The object is not an instance of the expected class.',
    actual: prettyPrint(actual),
    expected: `To be an instance of:\n${expected.name}`
  }));
};

export {
  assertObjectIsInstanceOfClass
};
