import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotContainingItem } from '../../../../lib/assertions/forSets/assertSetIsNotContainingItem';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsNotContainingItem', (): void => {
  test('does not return an error if the set does not contain the item.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);
    const item = 15;

    assert.that(
      assertSetIsNotContainingItem(actual, item)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set contains the item.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4, { foo: 'bar' }]);
    const item = { foo: 'bar' };

    assert.that(
      assertSetIsNotContainingItem(actual, item)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set contains the item.',
        expected: `To not contain:\n${prettyPrint(item)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
