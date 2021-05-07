import { assert } from '../../../../lib/assertthat';
import { assertArrayIsNotContainingItem } from '../../../../lib/assertions/forArrays/assertArrayIsNotContainingItem';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsNotContainingItem', (): void => {
  test('does not return an error if the array does not contain the item.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const item = 15;

    assert.that(
      assertArrayIsNotContainingItem(actual, item)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array contains the item.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const item = { foo: 'bar' };

    assert.that(
      assertArrayIsNotContainingItem(actual, item)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array contains the item.',
        expected: `To not contain:\n${prettyPrint(item)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
