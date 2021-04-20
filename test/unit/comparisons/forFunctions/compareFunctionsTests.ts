/* eslint-disable unicorn/consistent-function-scoping */
import { assert } from '../../../../lib';
import { compareFunctions } from '../../../../lib/comparisons/forFunctions/compareFunctions';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { functionDiff } from '../../../../lib/diffs/forFunctions/FunctionDiff';
import { StringDiff } from '../../../../lib/diffs/forStrings/StringDiff';
import { unequalFunctionCost } from '../../../../lib/constants/costs';

suite('compareFunctions', (): void => {
  test(`returns an equal diff if both functions' string representations are equal.`, async (): Promise<void> => {
    const actual = (): string => 'foo';
    const expected = (): string => 'foo';

    const diff = compareFunctions(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test(`returns a function diff containing a string diff if the functions' string representations are not equal.`, async (): Promise<void> => {
    const actual = (): string => 'foo';
    const expected = (): string => 'bar';

    const diff = compareFunctions(actual, expected);

    assert.that(diff).is.equalTo(
      functionDiff({
        cost: unequalFunctionCost,
        stringRepresentationDiff: compareStrings(
          actual.toString(),
          expected.toString()
        ) as StringDiff
      })
    );
  });
});
