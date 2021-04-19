import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertActualIsEqualToExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const diff = compare(actual, expected);

  if (diff.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The values are not equal.',
    expected: prettyPrint(expected),
    actual: prettyPrint(actual),
    diff: prettyPrintDiff(diff)
  }));
};

export {
  assertActualIsEqualToExpected
};
