import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotContainingAllOfIterable } from '../../../../lib/assertions/forStrings/assertStringIsNotContainingAllOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertStringIsNotContainingAllOfIterable', (): void => {
  test('does not return an error if the string does not contain all expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'o b', 'ar', 'heck' ];

    assert.that(
      assertStringIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the string contains all expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'oo', 'ar' ];

    assert.that(
      assertStringIsNotContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string contains all sub-strings in the iterable.',
        actual: prettyPrint(actual),
        expected: `To not contain all of:\n${prettyPrint(iterable)}`
      }))
    );
  });
});
