import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsEmpty } from '../../../../lib/assertions/forSets/assertSetIsEmpty';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsEmpty', (): void => {
  test('does not return an error if the set is empty.', async (): Promise<void> => {
    const actual: Set<any> = new Set([]);

    assert.that(
      assertSetIsEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set is not empty.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);

    assert.that(
      assertSetIsEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set is not empty.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
