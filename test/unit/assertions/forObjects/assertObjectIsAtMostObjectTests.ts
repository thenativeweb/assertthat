import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsAtMostObject } from '../../../../lib/assertions/forObjects/assertObjectIsAtMostObject';
import { objectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertObjectIsAtMostObject', (): void => {
  test('does not return an error if the actual object is entirely contained in the expected object.', async (): Promise<void> => {
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
      assertObjectIsAtMostObject(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual object is not entirely contained in the expected object.', async (): Promise<void> => {
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
      assertObjectIsAtMostObject(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual object is not entirely contained in the expected object.',
        actual: prettyPrint(actual),
        expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
        diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(
          objectDiff({
            equal: {},
            additions: { uiae: 'nrtd' },
            changes: {},
            omissions: {},
            cost: 0.5
          })
        )}`
      }))
    );
  });

  suite('regression tests', (): void => {
    test(`returns an error if a key's value is present in actual and expected, but with different values.`, async (): Promise<void> => {
      const actual = {
        foo: 'bar'
      };
      const expected = {
        foo: 'bam'
      };

      assert.that(
        assertObjectIsAtMostObject(actual, expected)
      ).is.not.equalTo(
        value()
      );
    });

    test(`does not return an error if a nested object on the expected side contains additional properties.`, async (): Promise<void> => {
      const actual = {
        foo: 'foo',
        bar: {
          foo: 'foo'
        }
      };
      const expected = {
        foo: 'foo',
        bar: {
          foo: 'foo',
          bar: 'bar'
        }
      };

      assert.that(
        assertObjectIsAtMostObject(actual, expected)
      ).is.equalTo(
        value()
      );
    });
  });
});
