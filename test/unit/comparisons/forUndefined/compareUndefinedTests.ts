import { assert } from '../../../../lib';
import { compareUndefined } from '../../../../lib/comparisons/forUndefined/compareUndefined';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';

suite('compareUndefined', (): void => {
  test('returns an equal diff.', async (): Promise<void> => {
    const actual = undefined;
    const expected = undefined;

    const diff = compareUndefined(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });
});
