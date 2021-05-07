import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotContainingAllOfIterable } from '../../../../lib/assertions/forSets/assertSetIsNotContainingAllOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsNotContainingAllOfIterable', (): void => {
  test('does not return an error if the set does not contain all expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);
    const iterable = new Set([ 2, 4, { foo: 'bar' }]);

    assert.that(
      assertSetIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set contains all expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4, { foo: 'bar' }]);
    const iterable = new Set([ 2, { foo: 'bar' }]);

    assert.that(
      assertSetIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set contains all items in the iterable.',
        actual: prettyPrint(actual),
        expected: `To not contain all of:\n${prettyPrint(iterable)}`
      }))
    );
  });
});
