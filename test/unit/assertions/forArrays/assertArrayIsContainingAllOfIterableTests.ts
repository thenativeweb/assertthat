import { assert } from '../../../../lib/assertthat';
import { assertArrayIsContainingAllOfIterable } from '../../../../lib/assertions/forArrays/assertArrayIsContainingAllOfIterable';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsContainingAllOfIterable', (): void => {
  test('does not return an error if the array contains all expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4, { foo: 'bar' }];
    const iterable = [ 2, { foo: 'bar' }];

    assert.that(
      assertArrayIsContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array does not contain all expected items.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];
    const iterable = [ 2, 4, { foo: 'bar' }];

    assert.that(
      assertArrayIsContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array does not contain all expected items.',
        expected: `To contain all of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual),
        diff: `Missing these items:\n${prettyPrint(new Set([{ foo: 'bar' }]))}`
      }))
    );
  });
});
