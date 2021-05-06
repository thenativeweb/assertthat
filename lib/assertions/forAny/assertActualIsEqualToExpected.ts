import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertActualIsEqualToExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const diff = compare(dispel(actual), dispel(expected));

  if (isEqualDiff(diff)) {
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
