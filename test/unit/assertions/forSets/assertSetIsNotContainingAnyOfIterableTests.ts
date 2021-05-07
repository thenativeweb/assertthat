import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertSetIsNotContainingAnyOfIterable } from '../../../../lib/assertions/forSets/assertSetIsNotContainingAnyOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertSetIsNotContainingAnyOfIterable', (): void => {
  test('returns an error if the set contains any of the expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4, { foo: 'bar' }]);
    const iterable: Set<any> = new Set([ 2, new Set([ 5, 8 ]) ]);

    assert.that(
      assertSetIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The set contains one or more of the items in the iterable.',
        expected: `To not contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual),
        diff: `These items are contained, but should not be:\n${prettyPrint(new Set([ 2 ]))}`
      }))
    );
  });

  test('does not return an error if the set does not contain any of the expected items.', async (): Promise<void> => {
    const actual = new Set([ 1, 2, 4 ]);
    const iterable = new Set([ 17, 32, { foo: 'bar' }]);

    assert.that(
      assertSetIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });
});
