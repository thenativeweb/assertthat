import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsAtMostMap } from '../../../../lib/assertions/forMaps/assertMapIsAtMostMap';
import { mapDiff } from '../../../../lib/diffs/forMaps/MapDiff';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertMapIsAtMostMap', (): void => {
  test('does not return an error if the actual map is entirely contained in the expected map.', async (): Promise<void> => {
    const actual = new Map<any, any>([
      [ 13, 37 ],
      [ 'heck', 'meck' ]
    ]);
    const expected = new Map<any, any>([
      [ 'foo', 'bar' ],
      [ 13, 37 ],
      [ 12, 34 ],
      [ 'heck', 'meck' ]
    ]);

    assert.that(
      assertMapIsAtMostMap(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual map is not entirely contained in the expected map.', async (): Promise<void> => {
    const actual = new Map<any, any>([
      [ 'heck', 'meck' ],
      [ 'uiae', 'nrtd' ]
    ]);
    const expected = new Map<any, any>([
      [ 'foo', 'bar' ],
      [ 13, 37 ],
      [ 12, 34 ],
      [ 'heck', 'meck' ]
    ]);

    assert.that(
      assertMapIsAtMostMap(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual map is not entirely contained in the expected map.',
        actual: prettyPrint(actual),
        expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
        diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(
          mapDiff({
            equal: new Map(),
            additions: new Map([[ 'uiae', 'nrtd' ]]),
            changes: new Map(),
            omissions: new Map(),
            cost: 0.5
          })
        )}`
      }))
    );
  });

  suite('regression tests', (): void => {
    test(`returns an error if a key's value is present in actual and expected, but with different values.`, async (): Promise<void> => {
      const actual = new Map([
        [ 'foo', 'bar' ]
      ]);
      const expected = new Map([
        [ 'foo', 'bam' ]
      ]);

      assert.that(
        assertMapIsAtMostMap(actual, expected)
      ).is.not.equalTo(
        value()
      );
    });

    test(`does not return an error if a nested map on the expected side contains additional properties.`, async (): Promise<void> => {
      const actual = new Map<any, any>([
        [ 'foo', 'foo' ],
        [ 'bar', {
          foo: 'foo'
        }]
      ]);
      const expected = new Map<any, any>([
        [ 'foo', 'foo' ],
        [ 'bar', {
          foo: 'foo',
          bar: 'bar'
        }]
      ]);

      assert.that(
        assertMapIsAtMostMap(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
