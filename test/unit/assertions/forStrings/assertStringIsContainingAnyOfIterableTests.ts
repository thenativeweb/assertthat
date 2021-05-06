import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsContainingAnyOfIterable } from '../../../../lib/assertions/forStrings/assertStringIsContainingAnyOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertStringIsContainingAnyOfIterable', (): void => {
  test('does not return an error if the string contains any of the expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'foo', 'heck' ];

    assert.that(
      assertStringIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the string does not contain any of the expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'heck', 'uiae', 'nrtd' ];

    assert.that(
      assertStringIsContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string does not contain any of the expected sub-strings.',
        expected: `To contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual)
      }))
    );
  });
});
