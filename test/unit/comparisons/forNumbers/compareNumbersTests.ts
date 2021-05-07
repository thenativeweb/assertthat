import { assert } from '../../../../lib';
import { compareNumbers } from '../../../../lib/comparisons/forNumbers/compareNumbers';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { numberDiff } from '../../../../lib/diffs/forNumbers/NumberDiff';
import { unequalNumberCost } from '../../../../lib/constants/costs';

suite('compareNumbers', (): void => {
  test('returns an equal diff if the numbers are equal.', async (): Promise<void> => {
    const actual = 5;
    const expected = 5;

    const diff = compareNumbers(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a number diff if the numbers are not equal.', async (): Promise<void> => {
    const actual = 5;
    const expected = 19;

    const diff = compareNumbers(actual, expected);

    assert.that(diff).is.equalTo(numberDiff({
      actual,
      expected,
      difference: actual - expected,
      cost: unequalNumberCost
    }));
  });
});
