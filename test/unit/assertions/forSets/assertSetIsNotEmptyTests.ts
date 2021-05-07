import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotEmpty } from '../../../../lib/assertions/forSets/assertSetIsNotEmpty';
import { error, value } from 'defekt';

suite('assertSetIsNotEmpty', (): void => {
  test('does not return an error if the set is not empty.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);

    assert.that(
      assertSetIsNotEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set is empty.', async (): Promise<void> => {
    const actual: Set<any> = new Set([]);

    assert.that(
      assertSetIsNotEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set is empty.'
      }))
    );
  });
});
