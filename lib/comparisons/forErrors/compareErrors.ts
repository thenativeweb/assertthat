import { compareObjects } from '../forObjects/compareObjects';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { errorDiff, ErrorDiff } from '../../diffs/forErrors/ErrorDiff';
import { compareStrings } from '../forStrings/compareStrings';

const compareErrors = function (
  actual: Error,
  expected: Error
): ErrorDiff | EqualDiff {
  const actualErrorButWithoutTheShittiness = {
    ...actual,
    message: actual.message
  };
  const expectedErrorButWithoutTheShittiness = {
    ...expected,
    message: expected.message
  };

  const objectDiff = compareObjects(
    actualErrorButWithoutTheShittiness,
    expectedErrorButWithoutTheShittiness
  );

  if (isEqualDiff(objectDiff)) {
    return equalDiff({ value: actual });
  }

  return errorDiff({
    cost: objectDiff.cost,
    objectDiff
  });
};

export {
  compareErrors
};
