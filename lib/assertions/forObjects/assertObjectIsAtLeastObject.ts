import { AssertionFailed } from '../../errors';
import { compareObjects } from '../../comparisons/forObjects/compareObjects';
import { dispel } from '../../dispel/dispel';
import { findObjectDiffOmissions } from '../../diffs/forObjects/findObjectDiffOmissions';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertObjectIsAtLeastObject = function (
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

  const diffWithOnlyOmissions = findObjectDiffOmissions(diff);

  if (diffWithOnlyOmissions.cost === 0) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The expected object is not entirely contained in the actual object.',
    actual: prettyPrint(dispelledActual),
    expected: `To entirely contain:\n${prettyPrint(dispelledExpected)}`,
    diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(diffWithOnlyOmissions)}`
  }));
};

export {
  assertObjectIsAtLeastObject
};
