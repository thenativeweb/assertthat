import { compareStrings } from '../forStrings/compareStrings';
import { unequalFunctionCost } from '../../constants/costs';
import { functionDiff, FunctionDiff } from '../../diffs/forFunctions/FunctionDiff';

const compareFunctions = function (
/* eslint-disable @typescript-eslint/ban-types */
  actual: Function,
  expected: Function
/* eslint-enable @typescript-eslint/ban-types */
): FunctionDiff {
  const actualStringRepresentation = actual.toString();
  const expectedStringRepresentation = expected.toString();

  const stringRepresentationDiff = compareStrings(
    actualStringRepresentation,
    expectedStringRepresentation
  );

  if (stringRepresentationDiff.cost === 0) {
    return functionDiff({
      cost: 0,
      stringRepresentationDiff
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
