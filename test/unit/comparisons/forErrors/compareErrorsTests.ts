import { assert } from '../../../../lib/assertthat';
import { compareErrors } from '../../../../lib/comparisons/forErrors/compareErrors';
import { compareObjects } from '../../../../lib/comparisons/forObjects/compareObjects';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { errorDiff } from '../../../../lib/diffs/forErrors/ErrorDiff';
import { ObjectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';

suite('compareErrors', (): void => {
  test('returns an equal diff if the errors are equal.', async (): Promise<void> => {
    const actual = new Error('foo');
    const expected = new Error('foo');

    const diff = compareErrors(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns an error diff containing an object diff if the errors are not equal.', async (): Promise<void> => {
    const actual = new Error('foo');
    const expected = new Error('bar');

    const diff = compareErrors(actual, expected);

    assert.that(diff).is.equalTo(errorDiff({
      cost: 3,
      objectDiff: compareObjects(
        { ...actual, message: actual.message },
        { ...expected, message: expected.message }
      ) as ObjectDiff
    }));
  });
});
