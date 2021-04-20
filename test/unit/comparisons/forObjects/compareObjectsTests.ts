import { assert } from '../../../../lib/assertthat';
import { compareObjects } from '../../../../lib/comparisons/forObjects/compareObjects';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { objectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';

suite('compareObjects', (): void => {
  test('returns an equal diff if the objects have equal content.', async (): Promise<void> => {
    const actual = { foo: 5, bar: 8 };
    const expected = { foo: 5, bar: 8 };

    const diff = compareObjects(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a object diff with additions if the objects are not equal.', async (): Promise<void> => {
    const actual = { foo: 5, bar: 8, bam: 13 };
    const expected = { bam: 13};

    const diff = compareObjects(actual, expected);

    assert.that(diff).is.equalTo(objectDiff({
      cost: 1,
      additions: { foo: 5, bar: 8 },
      omissions: {},
      changes: {},
      equal: { bam: 13 }
    }));
  });

  test('returns a object diff with omissions if the objects are not equal.', async (): Promise<void> => {
    const actual = { bam: 13 };
    const expected = { foo: 5, bar: 8, bam: 13 };

    const diff = compareObjects(actual, expected);

    assert.that(diff).is.equalTo(objectDiff({
      cost: 1,
      additions: {},
      omissions: { foo: 5, bar: 8 },
      changes: {},
      equal: { bam: 13 }
    }));
  });

  test('returns a object diff with changes if the objects are not equal.', async (): Promise<void> => {
    const actual = { foo: 'foo', bam: 13 };
    const expected = { foo: 'bar', bam: 13 };

    const diff = compareObjects(actual, expected);

    assert.that(diff).is.equalTo(objectDiff({
      cost: 3,
      additions: {},
      omissions: {},
      changes: { foo: compareStrings('foo', 'bar') },
      equal: { bam: 13 }
    }));
  });
});
