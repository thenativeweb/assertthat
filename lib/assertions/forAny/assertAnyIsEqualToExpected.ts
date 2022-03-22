import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertAnyIsEqualToExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compare(dispelledActual, dispelledExpected);

  if (isEqualDiff(diff)) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The values are not equal.',
    expected: prettyPrint(dispelledExpected),
    actual: prettyPrint(dispelledActual),
    diff: prettyPrintDiff(diff)
  }));
};

export {
  assertAnyIsEqualToExpected
};
