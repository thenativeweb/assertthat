import { AssertionFailed } from '../../errors';
import { equalTo } from '../../comparisons/forArrays/equalTo';
import { prettyPrintArray } from '../../prettyPrint/forArrays/prettyPrintArray';
import { error, Result, value } from 'defekt';

const isNumberEqualToNumber = function <TContent = any>(
  actual: TContent[],
  expected: TContent[]
): Result<undefined, AssertionFailed> {
  if (equalTo(actual, expected)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The arrays are not equal.',
    data: {
      expected: prettyPrintArray(expected),
      actual: prettyPrintArray(actual)
    }
  }));
};

export {
  isNumberEqualToNumber
};
