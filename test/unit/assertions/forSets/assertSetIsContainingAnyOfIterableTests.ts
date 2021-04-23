import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsContainingAnyOfIterable } from '../../../../lib/assertions/forSets/assertSetIsContainingAnyOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsContainingAnyOfIterable', (): void => {
  test('does not return an error if the set contains any of the expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4, { foo: 'bar' }]);
    const iterable: Set<any> = new Set([ 2, new Set([ 5, 8 ]) ]);

    assert.that(
      assertSetIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the set does not contain any of the expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);
    const iterable = new Set([ 17, 32, { foo: 'bar' }]);

    assert.that(
      assertSetIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set does not contain any of the expected items.',
        expected: `To contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
