import { compareStrings } from '../forStrings/compareStrings';
import { unequalSymbolCost } from '../../constants/costs';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { symbolDiff, SymbolDiff } from '../../diffs/forSymbols/SymbolDiff';

const compareSymbols = function (
  actual: symbol,
  expected: symbol
): SymbolDiff | EqualDiff {
  const actualDescription = actual.description ?? '';
  const expectedDescription = expected.description ?? '';

  const descriptionDiff = compareStrings(
    actualDescription,
    expectedDescription
  );

  if (isEqualDiff(descriptionDiff)) {
    return equalDiff({
      value: actual
    });
  }

  return symbolDiff({
    cost: unequalSymbolCost,
    descriptionDiff
  });
};

export {
  compareSymbols
};
