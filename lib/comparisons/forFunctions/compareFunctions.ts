import { compareStrings } from '../forStrings/compareStrings';
import { unequalFunctionCost } from '../../constants/costs';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { functionDiff, FunctionDiff } from '../../diffs/forFunctions/FunctionDiff';

const compareFunctions = function (
/* eslint-disable @typescript-eslint/ban-types */
  actual: Function,
  expected: Function
/* eslint-enable @typescript-eslint/ban-types */
): FunctionDiff | EqualDiff {
  const actualStringRepresentation = actual.toString();
  const expectedStringRepresentation = expected.toString();

  const stringRepresentationDiff = compareStrings(
    actualStringRepresentation,
    expectedStringRepresentation
  );

  if (isEqualDiff(stringRepresentationDiff)) {
    return equalDiff({
      value: actual
    });
  }

  return functionDiff({
    cost: unequalFunctionCost,
    stringRepresentationDiff
  });
};

export {
  compareFunctions
};
