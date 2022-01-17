import { compareObjects } from '../forObjects/compareObjects';
import { makeErrorLessShitty } from '../../types/LessShittyError';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { errorDiff, ErrorDiff } from '../../diffs/forErrors/ErrorDiff';

const compareErrors = function (
  actual: Error,
  expected: Error
): ErrorDiff | EqualDiff {
  const actualLessShittyError = makeErrorLessShitty({
    error: actual
  });
  const expectedLessShittyError = makeErrorLessShitty({
    error: expected
  });

  const objectDiff = compareObjects(
    actualLessShittyError,
    expectedLessShittyError
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
