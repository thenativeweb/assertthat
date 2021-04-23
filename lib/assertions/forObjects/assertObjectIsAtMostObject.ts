import { AssertionFailed } from '../../errors';
import { compareObjects } from '../../comparisons/forObjects/compareObjects';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { ObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertObjectIsAtMostObject = function (
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
    Object.keys(diff.additions).length === 0 &&
      Object.keys(diff.changes).length === 0
  ) {
    return value();
  }

  const cleanedDiff: ObjectDiff = {
    ...diff,
    omissions: {},
    equal: {}
  };

  return error(new AssertionFailed({
    message: 'The actual object is not entirely contained in the expected object.',
    actual: prettyPrint(actual),
    expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
    diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(cleanedDiff)}`
  }));
};

export {
  assertObjectIsAtMostObject
};
