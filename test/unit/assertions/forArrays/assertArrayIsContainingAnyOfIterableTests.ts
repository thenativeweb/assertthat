import { assert } from '../../../../lib/assertthat';
import { assertArrayIsContainingAnyOfIterable } from '../../../../lib/assertions/forArrays/assertArrayIsContainingAnyOfIterable';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsContainingAnyOfIterable', (): void => {
  test('does not return an error if the array contains any of the expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const iterable: any[] = [ 2, new Set([ 5, 8 ]) ];

    assert.that(
      assertArrayIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array does not contain any of the expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const iterable = [ 17, 32, { foo: 'bar' }];

    assert.that(
      assertArrayIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array does not contain any of the expected items.',
        expected: `To contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
