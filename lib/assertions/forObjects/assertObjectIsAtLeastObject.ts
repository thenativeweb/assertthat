import { AssertionFailed } from '../../errors';
import { compareObjects } from '../../comparisons/forObjects/compareObjects';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { ObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertObjectIsAtLeastObject = function (
  actual: object,
  expected: object
): Result<undefined, AssertionFailed> {
  const diff = compareObjects(
    dispel(actual),
    dispel(expected)
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  if (
    Object.keys(diff.omissions).length === 0 &&
      Object.keys(diff.changes).length === 0
  ) {
    return value();
  }

  const cleanedDiff: ObjectDiff = {
    ...diff,
    additions: {},
    equal: {}
  };

  return error(new AssertionFailed({
    message: 'The expected object is not entirely contained in the actual object.',
    actual: prettyPrint(actual),
    expected: `To entirely contain:\n${prettyPrint(expected)}`,
    diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertObjectIsAtLeastObject
};
