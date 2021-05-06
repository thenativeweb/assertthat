import { assert } from '../../../../lib/assertthat';
import { assertArrayIsNotContainingAnyOfIterable } from '../../../../lib/assertions/forArrays/assertArrayIsNotContainingAnyOfIterable';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsNotContainingAnyOfIterable', (): void => {
  test('returns an error if the array contains any of the expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const iterable: any[] = [ 2, new Set([ 5, 8 ]) ];

    assert.that(
      assertArrayIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array contains one or more of the items in the iterable.',
        expected: `To not contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual),
        diff: `These items are contained, but should not be:\n${prettyPrint(new Set([ 2 ]))}`
      }))
    );
  });

  test('does not return an error if the array does not contain any of the expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const iterable = [ 17, 32, { foo: 'bar' }];

    assert.that(
      assertArrayIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });
});
