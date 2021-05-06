import { arrayDiff } from 'lib/diffs/forArrays/ArrayDiff';
import { assert } from '../../../../lib/assertthat';
import { compare } from '../../../../lib/comparisons/typeAware/compare';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { incompatibleTypeDiff } from '../../../../lib/diffs/IncompatibleTypeDiff';
import { incompatibleTypesCost } from '../../../../lib/constants/costs';
import { mapDiff } from 'lib/diffs/forMaps/MapDiff';
import { objectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';
import { setDiff } from 'lib/diffs/forSets/SetDiff';
import { stringDiff } from 'lib/diffs/forStrings/StringDiff';

suite('compare', (): void => {
  test('returns equal diff for complex data.', async (): Promise<void> => {
    const actual = {
      one: 'one',
      two: [ 1, 2, 3 ],
      three: 13,
      four: new Set([ 1, 2, 3 ]),
      five: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      six: {
        seven: {
          eight: 'foo.bar'
        }
      }
    };
    const expected = {
      one: 'one',
      two: [ 1, 2, 3 ],
      three: 13,
      four: new Set([ 1, 2, 3 ]),
      five: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      six: {
        seven: {
          eight: 'foo.bar'
        }
      }
    };

    const diff = compare(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns a deep diff for complex data.', async (): Promise<void> => {
    const actual = {
      one: 'one',
      two: [ 1, 2, 3 ],
      three: 13,
      four: new Set([ 1, 2, 3 ]),
      five: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      six: {
        seven: {
          eight: 'foo.bar'
        }
      }
    };
    const expected = {
      two: [ 2, 3 ],
      three: 13,
      four: new Set([ 1 ]),
      five: new Map([[ 'foo', 'bar' ], [ 'bar', 'foo' ]]),
      six: {
        seven: {
          eight: 'heck'
        }
      },
      nine: 'nine'
    };

    const diff = compare(actual, expected);

    assert.that(diff).is.equalTo(
      objectDiff({
        cost: 18,
        additions: {
          one: 'one'
        },
        omissions: {
          nine: 'nine'
        },
        changes: {
          two: arrayDiff({
            cost: 1,
            segments: [
              { addition: [ 1 ], cost: 1 },
              { equal: [ 2, 3 ], cost: 0 }
            ]
          }),
          four: setDiff({
            cost: 2,
            additions: new Set([ 2, 3 ]),
            omissions: new Set(),
            equal: new Set([ 1 ])
          }),
          five: mapDiff({
            cost: 6,
            additions: new Map(),
            omissions: new Map(),
            changes: new Map([
              [ 'foo', stringDiff({
                cost: 3,
                segments: [{ replace: 'foo', replaceWith: 'bar', cost: 3 }]
              }) ],
              [ 'bar', stringDiff({
                cost: 3,
                segments: [{ replace: 'bar', replaceWith: 'foo', cost: 3 }]
              }) ]
            ]),
            equal: new Map()
          }),
          six: objectDiff({
            cost: 7,
            additions: {},
            omissions: {},
            changes: {
              seven: objectDiff({
                cost: 7,
                additions: {},
                omissions: {},
                changes: {
                  eight: stringDiff({
                    cost: 7,
                    segments: [
                      { addition: 'foo', cost: 3 },
                      { replace: '.bar', replaceWith: 'heck', cost: 4 }
                    ]
                  })
                },
                equal: {}
              })
            },
            equal: {}
          })
        },
        equal: {
          three: 13
        }
      })
    );
  });

  suite('simple cases', (): void => {
    test('returns an equal diff for two undefineds.', async (): Promise<void> => {
      const actual = undefined;
      const expected = undefined;

      const diff = compare(actual, expected);

      assert.that(diff).is.equalTo(
        equalDiff({ value: undefined })
      );
    });

    test('returns an equal diff for two nulls.', async (): Promise<void> => {
      const actual = null;
      const expected = null;

      const diff = compare(actual, expected);

      assert.that(diff).is.equalTo(
        equalDiff({ value: null })
      );
    });

    test('returns a type mismatch diff for two different types.', async (): Promise<void> => {
      const actual = 5;
      const expected = 'foo';

      const diff = compare(actual, expected);

      assert.that(diff).is.equalTo(
        incompatibleTypeDiff({
          actual,
          expected,
          cost: incompatibleTypesCost
        })
      );
    });
  });
});
