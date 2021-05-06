import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsAtLeastSet } from '../../../../lib/assertions/forSets/assertSetIsAtLeastSet';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { setDiff } from '../../../../lib/diffs/forSets/SetDiff';
import { error, value } from 'defekt';

suite('assertSetIsAtLeastSet', (): void => {
  test('does not return an error if the expected set is entirely contained in the actual set.', async (): Promise<void> => {
    const actual = new Set<any>([
      'foo',
      13,
      12,
      'heck'
    ]);
    const expected = new Set<any>([
      13,
      'heck'
    ]);

    assert.that(
      assertSetIsAtLeastSet(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected set is not entirely contained in the actual set.', async (): Promise<void> => {
    const actual = new Set<any>([
      'foo',
      13,
      12,
      'heck'
    ]);
    const expected = new Set<any>([
      'heck',
      'uiae'
    ]);

    assert.that(
      assertSetIsAtLeastSet(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected set is not entirely contained in the actual set.',
        actual: prettyPrint(actual),
        expected: `To entirely contain:\n${prettyPrint(expected)}`,
        diff: `The following sub-set shows relevant changes between actual and expected:\n${prettyPrintDiff(
          setDiff({
            equal: new Set(),
            additions: new Set(),
            omissions: new Set([ 'uiae' ]),
            cost: 0.5
          })
        )}`
      }))
    );
  });
});
