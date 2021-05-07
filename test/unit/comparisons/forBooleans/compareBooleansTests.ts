import { assert } from '../../../../lib';
import { booleanDiff } from '../../../../lib/diffs/forBooleans/BooleanDiff';
import { compareBooleans } from '../../../../lib/comparisons/forBooleans/compareBooleans';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { unequalBooleanCost } from '../../../../lib/constants/costs';

suite('compareBooleans', (): void => {
  test('returns an equal diff if both booleans are true.', async (): Promise<void> => {
    const actual = true;
    const expected = true;

    const diff = compareBooleans(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns an equal diff if both booleans are false.', async (): Promise<void> => {
    const actual = false;
    const expected = false;

    const diff = compareBooleans(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a boolean diff if actual is true and expected is false.', async (): Promise<void> => {
    const actual = true;
    const expected = false;

    const diff = compareBooleans(actual, expected);

    assert.that(diff).is.equalTo(booleanDiff({
      actual,
      expected,
      cost: unequalBooleanCost
    }));
  });

  test('returns a boolean diff if actual is false and expected is true.', async (): Promise<void> => {
    const actual = false;
    const expected = true;

    const diff = compareBooleans(actual, expected);

    assert.that(diff).is.equalTo(booleanDiff({
      actual,
      expected,
      cost: unequalBooleanCost
    }));
  });
});
