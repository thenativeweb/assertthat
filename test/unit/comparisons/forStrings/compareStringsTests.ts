import { assert } from '../../../../lib';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { stringDiff } from '../../../../lib/diffs/forStrings/StringDiff';

suite('compareStrings', (): void => {
  test('returns an equal diff if the strings are equal.', async (): Promise<void> => {
    const actual = 'foo bar';
    const expected = 'foo bar';

    const diff = compareStrings(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a string diff containing addition segments if the strings are not equal.', async (): Promise<void> => {
    const actual = 'foo bar';
    const expected = '';

    const diff = compareStrings(actual, expected);

    assert.that(diff).is.equalTo(
      stringDiff({
        cost: 3.5,
        segments: [
          {
            addition: 'foo bar',
            cost: 3.5
          }
        ]
      })
    );
  });

  test('returns a string diff containing omission segments if the strings are not equal.', async (): Promise<void> => {
    const actual = '';
    const expected = 'foo bar';

    const diff = compareStrings(actual, expected);

    assert.that(diff).is.equalTo(
      stringDiff({
        cost: 3.5,
        segments: [
          {
            omission: 'foo bar',
            cost: 3.5
          }
        ]
      })
    );
  });

  test('returns a string diff containing replace segments if the strings are not equal.', async (): Promise<void> => {
    const actual = 'abc';
    const expected = 'xyz';

    const diff = compareStrings(actual, expected);

    assert.that(diff).is.equalTo(
      stringDiff({
        cost: 3,
        segments: [
          {
            replace: 'abc',
            replaceWith: 'xyz',
            cost: 3
          }
        ]
      })
    );
  });

  test('returns a mixed string diff.', async (): Promise<void> => {
    const actual = 'GCTGATATAGCT';
    const expected = 'GGGTGATTAGCT';

    const diff = compareStrings(actual, expected);

    assert.that(diff).is.equalTo(
      stringDiff({
        cost: 2,
        segments: [
          { omission: 'G', cost: 0.5 },
          { equal: 'G', cost: 0 },
          { replace: 'C', replaceWith: 'G', cost: 1 },
          { equal: 'TGAT', cost: 0 },
          { addition: 'A', cost: 0.5 },
          { equal: 'TAGCT', cost: 0 }
        ]
      })
    );
  });

  test('uses the chunk delimiter to determine word border for diffing.', async (): Promise<void> => {
    const actual = 'foo\nbar';
    const expected = 'foo\nfoo';

    const diff = compareStrings(actual, expected, '\n');

    assert.that(diff).is.equalTo(
      stringDiff({
        cost: 1,
        segments: [
          { equal: 'foo', cost: 0 },
          { addition: 'bar', cost: 0.5 },
          { omission: 'foo', cost: 0.5 }
        ]
      })
    );
  });
});
