import { AssertionFailed } from '../../errors';
import { compareObjects } from '../../comparisons/forObjects/compareObjects';
import { dispel } from '../../dispel/dispel';
import { findObjectDiffAdditions } from '../../diffs/forObjects/findObjectDiffAdditions';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertObjectIsAtMostObject = function (
  actual: object,
  expected: object
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareObjects(
    dispelledActual,
    dispelledExpected
  );

  if (isEqualDiff(diff)) {
    return value();
  }

  const diffWithOnlyAdditions = findObjectDiffAdditions(diff);

  if (diffWithOnlyAdditions.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The actual object is not entirely contained in the expected object.',
    actual: prettyPrint(dispelledActual),
    expected: `To be entirely contained in:\n${prettyPrint(dispelledExpected)}`,
    diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(diffWithOnlyAdditions)}`
  }));
};

export {
  assertObjectIsAtMostObject
};
