import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsAtLeastMap } from '../../../../lib/assertions/forMaps/assertMapIsAtLeastMap';
import { mapDiff } from '../../../../lib/diffs/forMaps/MapDiff';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertMapIsAtLeastMap', (): void => {
  test('does not return an error if the expected map is entirely contained in the actual map.', async (): Promise<void> => {
    const actual = new Map<any, any>([
      [ 'foo', 'bar' ],
      [ 13, 37 ],
      [ 12, 34 ],
      [ 'heck', 'meck' ]
    ]);
    const expected = new Map<any, any>([
      [ 13, 37 ],
      [ 'heck', 'meck' ]
    ]);

    assert.that(
      assertMapIsAtLeastMap(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected map is not entirely contained in the actual map.', async (): Promise<void> => {
    const actual = new Map<any, any>([
      [ 'foo', 'bar' ],
      [ 13, 37 ],
      [ 12, 34 ],
      [ 'heck', 'meck' ]
    ]);
    const expected = new Map<any, any>([
      [ 'heck', 'meck' ],
      [ 'uiae', 'nrtd' ]
    ]);

    assert.that(
      assertMapIsAtLeastMap(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected map is not entirely contained in the actual map.',
        actual: prettyPrint(actual),
        expected: `To entirely contain:\n${prettyPrint(expected)}`,
        diff: `The following sub-map shows relevant changes between actual and expected:\n${prettyPrintDiff(
          mapDiff({
            equal: new Map(),
            additions: new Map(),
            changes: new Map(),
            omissions: new Map([[ 'uiae', 'nrtd' ]]),
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
        assertMapIsAtLeastMap(actual, expected)
      ).is.not.equalTo(
        value()
      );
    });
  });
});
