import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsContainingItem } from '../../../../lib/assertions/forSets/assertSetIsContainingItem';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsContainingItem', (): void => {
  test('does not return an error if the set contains the item.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4, { foo: 'bar' }]);
    const item = { foo: 'bar' };

    assert.that(
      assertSetIsContainingItem(actual, item)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set does not contain the item.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);
    const item = 15;

    assert.that(
      assertSetIsContainingItem(actual, item)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set does not contain the expected item.',
        expected: `To contain:\n${prettyPrint(item)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
