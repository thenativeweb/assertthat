import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsNotAtLeastMap } from '../../../../lib/assertions/forMaps/assertMapIsNotAtLeastMap';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertMapIsNotAtLeastMap', (): void => {
  test('does not return an error if the expected map is not entirely contained in the actual map.', async (): Promise<void> => {
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
      assertMapIsNotAtLeastMap(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected map is entirely contained in the actual map.', async (): Promise<void> => {
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
      assertMapIsNotAtLeastMap(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected map is entirely contained in the actual map.',
        actual: prettyPrint(actual),
        expected: `To not entirely contain:\n${prettyPrint(expected)}`
      }))
    );
  });

  suite('regression tests', (): void => {
    test(`does not return an error if a key's value is present in actual and expected, but with different values.`, async (): Promise<void> => {
      const actual = new Map([
        [ 'foo', 'bar' ]
      ]);
      const expected = new Map([
        [ 'foo', 'bam' ]
      ]);

      assert.that(
        assertMapIsNotAtLeastMap(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
