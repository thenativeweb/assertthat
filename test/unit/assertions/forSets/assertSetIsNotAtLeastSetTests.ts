import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotAtLeastSet } from '../../../../lib/assertions/forSets/assertSetIsNotAtLeastSet';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsNotAtLeastSet', (): void => {
  test('does not return an error if the expected set is not entirely contained in the actual set.', async (): Promise<void> => {
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
      assertSetIsNotAtLeastSet(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the expected set is entirely contained in the actual set.', async (): Promise<void> => {
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
      assertSetIsNotAtLeastSet(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The expected set is entirely contained in the actual set.',
        actual: prettyPrint(actual),
        expected: `To not entirely contain:\n${prettyPrint(expected)}`
      }))
    );
  });
});
