import { assert } from '../../../../lib/assertthat';
import { compareMaps } from '../../../../lib/comparisons/forMaps/compareMaps';
import { compareStrings } from '../../../../lib/comparisons/forStrings/compareStrings';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { mapDiff } from '../../../../lib/diffs/forMaps/MapDiff';

suite('compareMaps', (): void => {
  test('returns an equal diff if the maps have equal content.', async (): Promise<void> => {
    const actual = new Map([[ 'foo', 5 ], [ 'bar', 8 ]]);
    const expected = new Map([[ 'foo', 5 ], [ 'bar', 8 ]]);

    const diff = compareMaps(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a map diff with additions if the maps are not equal.', async (): Promise<void> => {
    const actual = new Map([[ 'foo', 5 ], [ 'bar', 8 ], [ 'bam', 13 ]]);
    const expected = new Map([[ 'bam', 13 ]]);

    const diff = compareMaps(actual, expected);

    assert.that(diff).is.equalTo(mapDiff({
      cost: 1,
      additions: new Map([[ 'foo', 5 ], [ 'bar', 8 ]]),
      omissions: new Map(),
      changes: new Map(),
      equal: new Map([[ 'bam', 13 ]])
    }));
  });

  test('returns a map diff with omissions if the maps are not equal.', async (): Promise<void> => {
    const actual = new Map([[ 'bam', 13 ]]);
    const expected = new Map([[ 'foo', 5 ], [ 'bar', 8 ], [ 'bam', 13 ]]);

    const diff = compareMaps(actual, expected);

    assert.that(diff).is.equalTo(mapDiff({
      cost: 1,
      additions: new Map(),
      omissions: new Map([[ 'foo', 5 ], [ 'bar', 8 ]]),
      changes: new Map(),
      equal: new Map([[ 'bam', 13 ]])
    }));
  });

  test('returns a map diff with changes if the maps are not equal.', async (): Promise<void> => {
    const actual = new Map<any, any>([[ 'foo', 'foo' ], [ 'bam', 13 ]]);
    const expected = new Map<any, any>([[ 'foo', 'bar' ], [ 'bam', 13 ]]);

    const diff = compareMaps(actual, expected);

    assert.that(diff).is.equalTo(mapDiff({
      cost: 3,
      additions: new Map(),
      omissions: new Map(),
      changes: new Map([[ 'foo', compareStrings('foo', 'bar') ]]),
      equal: new Map([[ 'bam', 13 ]])
    }));
  });
});
