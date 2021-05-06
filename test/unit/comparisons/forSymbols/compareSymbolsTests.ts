import { assert } from '../../../../lib';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { compareSymbols } from '../../../../lib/comparisons/forSymbols/compareSymbols';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { StringDiff } from '../../../../lib/diffs/forStrings/StringDiff';
import { symbolDiff } from '../../../../lib/diffs/forSymbols/SymbolDiff';
import { unequalSymbolCost } from '../../../../lib/constants/costs';

suite('compareSymbols', (): void => {
  test(`returns an equal diff if the symbols' string representations are equal.`, async (): Promise<void> => {
    const actual = Symbol('foo');
    const expected = Symbol('foo');

    const diff = compareSymbols(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test(`returns a symbol diff containing a string diff if the symbols' string representations are not equal.`, async (): Promise<void> => {
    const actual = Symbol('foo');
    const expected = Symbol('bar');

    const diff = compareSymbols(actual, expected);

    assert.that(diff).is.equalTo(symbolDiff({
      cost: unequalSymbolCost,
      descriptionDiff: compareStrings(
        actual.description!,
        expected.description!
      ) as StringDiff
    }));
  });
});
