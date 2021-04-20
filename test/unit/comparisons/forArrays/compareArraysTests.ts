import { arrayDiff } from '../../../../lib/diffs/forArrays/ArrayDiff';
import { assert } from '../../../../lib';
import { compareArrays } from '../../../../lib/comparisons/forArrays/compareArrays';
import { compareStrings } from 'lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';

suite('compareArrays', (): void => {
  test('returns an equal diff if the arrays are equal.', async (): Promise<void> => {
    const actual = [ 'foo', 'bar' ];
    const expected = [ 'foo', 'bar' ];

    const diff = compareArrays(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a array diff containing addition segments if the arrays are not equal.', async (): Promise<void> => {
    const actual = [ 'foo', 'bar' ];
    const expected: any[] = [];

    const diff = compareArrays(actual, expected);

    assert.that(diff).is.equalTo(
      arrayDiff({
        cost: 1,
        segments: [
          {
            addition: [ 'foo', 'bar' ],
            cost: 1
          }
        ]
      })
    );
  });

  test('returns a array diff containing omission segments if the arrays are not equal.', async (): Promise<void> => {
    const actual: any[] = [];
    const expected = [ 'foo', 'bar' ];

    const diff = compareArrays(actual, expected);

    assert.that(diff).is.equalTo(
      arrayDiff({
        cost: 1,
        segments: [
          {
            omission: [ 'foo', 'bar' ],
            cost: 1
          }
        ]
      })
    );
  });

  test('returns a array diff containing change segments if the arrays are not equal.', async (): Promise<void> => {
    const actual = [ 'abc' ];
    const expected = [ 'abd' ];

    const diff = compareArrays(actual, expected);

    assert.that(diff).is.equalTo(
      arrayDiff({
        cost: 1,
        segments: [
          {
            change: [ compareStrings('abc', 'abd') ],
            cost: 1
          }
        ]
      })
    );
  });
});
