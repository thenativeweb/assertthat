import { arrayDiff } from 'lib/diffs/forArrays/ArrayDiff';
import { mapDiff } from 'lib/diffs/forMaps/MapDiff';
import { setDiff } from 'lib/diffs/forSets/SetDiff';
import { stringDiff } from 'lib/diffs/forStrings/StringDiff';
import { assert } from '../../../../lib/assertthat';
import { compare } from '../../../../lib/comparisons/typeAware/compare';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { objectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';

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

  test('returns a deef diff for complex data.', async (): Promise<void> => {
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
        cost: 14,
        additions: {
          one: 'one'
        },
        omissions: {
          nine: 'nine'
        },
        changes: {
          two: arrayDiff({
            cost: 0.5,
            segments: [
              { addition: [ 1 ], cost: 0.5 },
              { equal: [ 2, 3 ], cost: 0 }
            ]
          }),
          four: setDiff({
            cost: 1,
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
            cost: 5.5,
            additions: {},
            omissions: {},
            changes: {
              seven: objectDiff({
                cost: 5.5,
                additions: {},
                omissions: {},
                changes: {
                  eight: stringDiff({
                    cost: 5.5,
                    segments: [
                      { addition: 'foo', cost: 1.5 },
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
});
