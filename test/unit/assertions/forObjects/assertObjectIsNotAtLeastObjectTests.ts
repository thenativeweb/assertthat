import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsNotAtLeastObject } from '../../../../lib/assertions/forObjects/assertObjectIsNotAtLeastObject';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertObjectIsNotAtLeastObject', (): void => {
  test('does not return an error if the expected object is not entirely contained in the actual object.', async (): Promise<void> => {
    const actual = {
      foo: 'bar',
      13: 37,
      12: 34,
      heck: 'meck'
    };
    const expected = {
      heck: 'meck',
      uiae: 'nrtd'
    };

    assert.that(
      assertObjectIsNotAtLeastObject(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected object is entirely contained in the actual object.', async (): Promise<void> => {
    const actual = {
      foo: 'bar',
      13: 37,
      12: 34,
      heck: 'meck'
    };
    const expected = {
      13: 37,
      heck: 'meck'
    };

    assert.that(
      assertObjectIsNotAtLeastObject(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected object is entirely contained in the actual object.',
        actual: prettyPrint(actual),
        expected: `To not entirely contain:\n${prettyPrint(expected)}`
      }))
    );
  });

  suite('regression tests', (): void => {
    test(`does not return an error if a key's value is present in actual and expected, but with different values.`, async (): Promise<void> => {
      const actual = {
        foo: 'bar'
      };
      const expected = {
        foo: 'bam'
      };

      assert.that(
        assertObjectIsNotAtLeastObject(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
