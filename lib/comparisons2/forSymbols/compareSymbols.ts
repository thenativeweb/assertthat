import { compareStrings } from '../forStrings/compareStrings';
import { unequalSymbolCost } from '../../constants/costs';
import { symbolDiff, SymbolDiff } from '../../diffs/forSymbols/SymbolDiff';

const compareSymbols = function (
  actual: symbol,
  expected: symbol
): SymbolDiff {
  const actualDescription = actual.description ?? '';
  const expectedDescription = expected.description ?? '';

  const descriptionDifference = compareStrings(
    actualDescription,
    expectedDescription
  );

  if (descriptionDifference.cost === 0) {
    return symbolDiff({
      cost: 0,
      descriptionDifference
    });
  }

  return symbolDiff({
    cost: unequalSymbolCost,
    descriptionDifference
  });
};

export {
  compareSymbols
};
