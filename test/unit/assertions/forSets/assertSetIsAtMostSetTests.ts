import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsAtMostSet } from '../../../../lib/assertions/forSets/assertSetIsAtMostSet';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { setDiff } from '../../../../lib/diffs/forSets/SetDiff';
import { error, value } from 'defekt';

suite('assertSetIsAtMostSet', (): void => {
  test('does not return an error if the actual set is entirely contained in the expected set.', async (): Promise<void> => {
    const actual = new Set<any>([
      13,
      'heck'
    ]);
    const expected = new Set<any>([
      'foo',
      13,
      12,
      'heck'
    ]);

    assert.that(
      assertSetIsAtMostSet(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual set is not entirely contained in the expected set.', async (): Promise<void> => {
    const actual = new Set<any>([
      'heck',
      'uiae'
    ]);
    const expected = new Set<any>([
      'foo',
      13,
      12,
      'heck'
    ]);

    assert.that(
      assertSetIsAtMostSet(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual set is not entirely contained in the expected set.',
        actual: prettyPrint(actual),
        expected: `To be entirely contained in:\n${prettyPrint(expected)}`,
        diff: `The following sub-set shows relevant changes between actual and expected:\n${prettyPrintDiff(
          setDiff({
            equal: new Set(),
            additions: new Set([ 'uiae' ]),
            omissions: new Set(),
            cost: 0.5
          })
        )}`
      }))
    );
  });
});
