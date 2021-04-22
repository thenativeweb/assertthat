import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsNotAtMostMap } from '../../../../lib/assertions/forMaps/assertMapIsNotAtMostMap';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertMapIsNotAtMostMap', (): void => {
  test('does not return an error if the actual map is not entirely contained in the expected map.', async (): Promise<void> => {
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
      assertMapIsNotAtMostMap(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual map is entirely contained in the expected map.', async (): Promise<void> => {
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
      assertMapIsNotAtMostMap(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual map is entirely contained in the expected map.',
        actual: prettyPrint(actual),
        expected: `To not be entirely contained in:\n${prettyPrint(expected)}`
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
        assertMapIsNotAtMostMap(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
