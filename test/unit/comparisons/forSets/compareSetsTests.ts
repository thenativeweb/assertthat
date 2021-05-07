import { assert } from '../../../../lib/assertthat';
import { compareSets } from '../../../../lib/comparisons/forSets/compareSets';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { setDiff } from '../../../../lib/diffs/forSets/SetDiff';

suite('compareSets', (): void => {
  test('returns an equal diff if the sets have equal content.', async (): Promise<void> => {
    const actual = new Set([ 5, 8 ]);
    const expected = new Set([ 5, 8 ]);

    const diff = compareSets(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a set diff with additions if the sets are not equal.', async (): Promise<void> => {
    const actual = new Set([ 3, 5, 8 ]);
    const expected = new Set([ 3 ]);

    const diff = compareSets(actual, expected);

    assert.that(diff).is.equalTo(setDiff({
      cost: 2,
      additions: new Set([ 5, 8 ]),
      omissions: new Set(),
      equal: new Set([ 3 ])
    }));
  });

  test('returns a set diff with omissions if the sets are not equal.', async (): Promise<void> => {
    const actual = new Set([ 3 ]);
    const expected = new Set([ 3, 5, 8 ]);

    const diff = compareSets(actual, expected);

    assert.that(diff).is.equalTo(setDiff({
      cost: 2,
      additions: new Set(),
      omissions: new Set([ 5, 8 ]),
      equal: new Set([ 3 ])
    }));
  });
});
