import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotContainingAnyOfIterable } from '../../../../lib/assertions/forStrings/assertStringIsNotContainingAnyOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertStringIsNotContainingAnyOfIterable', (): void => {
  test('returns an error if the string contains any of the expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'heck', 'foo' ];

    assert.that(
      assertStringIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string contains one or more of the sub-strings in the iterable.',
        expected: `To not contain any of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual),
        diff: `These sub-strings are contained, but should not be:\n${prettyPrint(new Set([ 'foo' ]))}`
      }))
    );
  });

  test('does not return an error if the string does not contain any of the expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'heck', 'uiae' ];

    assert.that(
      assertStringIsNotContainingAnyOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });
});
