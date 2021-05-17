import { AssertionFailed } from '../../errors';
import { compareObjects } from '../../comparisons/forObjects/compareObjects';
import { dispel } from '../../dispel/dispel';
import { isEqualDiff } from '../../diffs/EqualDiff';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { error, Result, value } from 'defekt';

const assertObjectIsNotAtMostObject = function (
  actual: object,
  expected: object
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);
  const dispelledExpected = dispel(expected);

  const diff = compareObjects(
    dispelledActual,
    dispelledExpected
  );

  if (
    !isEqualDiff(diff) &&
      (
        Object.keys(diff.additions).length > 0 ||
          Object.keys(diff.changes).length > 0
      )
  ) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The actual object is entirely contained in the expected object.',
    actual: prettyPrint(dispelledActual),
    expected: `To not be entirely contained in:\n${prettyPrint(dispelledExpected)}`
  }));
};

export {
  assertObjectIsNotAtMostObject
};
