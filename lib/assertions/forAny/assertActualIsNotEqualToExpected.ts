import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertActualIsNotEqualToExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const diff = compare(dispel(actual), dispel(expected));

  if (!isEqualDiff(diff)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The values are equal.',
    expected: `Not to equal:\n${prettyPrint(expected)}`
  }));
};

export {
  assertActualIsNotEqualToExpected
};
