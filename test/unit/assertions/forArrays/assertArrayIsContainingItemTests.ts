import { assert } from '../../../../lib/assertthat';
import { assertArrayIsContainingItem } from '../../../../lib/assertions/forArrays/assertArrayIsContainingItem';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsContainingItem', (): void => {
  test('does not return an error if the array contains the item.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const item = { foo: 'bar' };

    assert.that(
      assertArrayIsContainingItem(actual, item)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array does not contain the item.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const item = 15;

    assert.that(
      assertArrayIsContainingItem(actual, item)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array does not contain the expected item.',
        expected: `To contain:\n${prettyPrint(item)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
