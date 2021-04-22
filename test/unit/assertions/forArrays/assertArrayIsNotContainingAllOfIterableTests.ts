import { assert } from '../../../../lib/assertthat';
import { assertArrayIsNotContainingAllOfIterable } from '../../../../lib/assertions/forArrays/assertArrayIsNotContainingAllOfIterable';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsNotContainingAllOfIterable', (): void => {
  test('does not return an error if the array does not contain all expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const iterable = [ 2, 4, { foo: 'bar' }];

    assert.that(
      assertArrayIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array contains all expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const iterable = [ 2, { foo: 'bar' }];

    assert.that(
      assertArrayIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array contains all items in the iterable.',
        actual: prettyPrint(actual),
        expected: `To not contain all of:\n${prettyPrint(iterable)}`
      }))
    );
  });
});
