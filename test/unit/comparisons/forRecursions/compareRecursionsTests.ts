import { assert } from '../../../../lib';
import { compareRecursions } from '../../../../lib/comparisons/forRecursions/compareRecursions';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { recursion } from '../../../../lib/types/Recursion';
import { recursionDiff } from '../../../../lib/diffs/forRecursions/RecursionDiff';
import { StringDiff } from '../../../../lib/diffs/forStrings/StringDiff';
import { unequalRecursionCost } from '../../../../lib/constants/costs';

suite('compareRecursions', (): void => {
  test('returns an equal diff if the recursions have the same recursion path.', async (): Promise<void> => {
    const actual = recursion({ recursionPath: 'foo.bar' });
    const expected = recursion({ recursionPath: 'foo.bar' });

    const diff = compareRecursions(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a recursion diff containing a string diff if the recursions are not equal.', async (): Promise<void> => {
    const actual = recursion({ recursionPath: 'foo.bar' });
    const expected = recursion({ recursionPath: 'bam.bas' });

    const diff = compareRecursions(actual, expected);

    assert.that(diff).is.equalTo(recursionDiff({
      cost: unequalRecursionCost,
      recursionPathDiff: compareStrings(
        actual.recursionPath,
        expected.recursionPath
      ) as StringDiff
    }));
  });
});
