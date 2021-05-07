import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsNotAtMostObject } from '../../../../lib/assertions/forObjects/assertObjectIsNotAtMostObject';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertObjectIsNotAtMostObject', (): void => {
  test('does not return an error if the actual object is not entirely contained in the expected object.', async (): Promise<void> => {
    const actual = {
      heck: 'meck',
      uiae: 'nrtd'
    };
    const expected = {
      foo: 'bar',
      13: 37,
      12: 34,
      heck: 'meck'
    };

    assert.that(
      assertObjectIsNotAtMostObject(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual object is entirely contained in the expected object.', async (): Promise<void> => {
    const actual = {
      13: 37,
      heck: 'meck'
    };
    const expected = {
      foo: 'bar',
      13: 37,
      12: 34,
      heck: 'meck'
    };

    assert.that(
      assertObjectIsNotAtMostObject(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual object is entirely contained in the expected object.',
        actual: prettyPrint(actual),
        expected: `To not be entirely contained in:\n${prettyPrint(expected)}`
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
        assertObjectIsNotAtMostObject(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
