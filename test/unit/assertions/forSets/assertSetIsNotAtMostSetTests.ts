import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotAtMostSet } from '../../../../lib/assertions/forSets/assertSetIsNotAtMostSet';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsNotAtMostSet', (): void => {
  test('does not return an error if the actual set is not entirely contained in the expected set.', async (): Promise<void> => {
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
      assertSetIsNotAtMostSet(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the actual set is entirely contained in the expected set.', async (): Promise<void> => {
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
      assertSetIsNotAtMostSet(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The actual set is entirely contained in the expected set.',
        actual: prettyPrint(actual),
        expected: `To not be entirely contained in:\n${prettyPrint(expected)}`
      }))
    );
  });
});
