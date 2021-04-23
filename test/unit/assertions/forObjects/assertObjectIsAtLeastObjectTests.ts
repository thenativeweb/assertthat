import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsAtLeastObject } from '../../../../lib/assertions/forObjects/assertObjectIsAtLeastObject';
import { objectDiff } from '../../../../lib/diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertObjectIsAtLeastObject', (): void => {
  test('does not return an error if the expected object is entirely contained in the actual object.', async (): Promise<void> => {
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
      assertObjectIsAtLeastObject(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected object is not entirely contained in the actual object.', async (): Promise<void> => {
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
      assertObjectIsAtLeastObject(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected object is not entirely contained in the actual object.',
        actual: prettyPrint(actual),
        expected: `To entirely contain:\n${prettyPrint(expected)}`,
        diff: `The following sub-object shows relevant changes between actual and expected:\n${prettyPrintDiff(
          objectDiff({
            equal: {},
            additions: {},
            changes: {},
            omissions: { uiae: 'nrtd' },
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
        assertObjectIsAtLeastObject(actual, expected)
      ).is.not.equalTo(
        value()
      );
    });
  });
});
