import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsContainingAllOfIterable } from '../../../../lib/assertions/forStrings/assertStringIsContainingAllOfIterable';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertStringIsContainingAllOfIterable', (): void => {
  test('does not return an error if the string contains all expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'oo', ' bar', 'o b' ];

    assert.that(
      assertStringIsContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the string does not contain all expected items.', async (): Promise<void> => {
    const actual = 'foo bar';
    const iterable = [ 'foo', 'heck', 'bar' ];

    assert.that(
      assertStringIsContainingAllOfIterable(actual, iterable)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string does not contain all expected sub-strings.',
        expected: `To contain all of:\n${prettyPrint(iterable)}`,
        actual: prettyPrint(actual),
        diff: `Missing these sub-strings:\n${prettyPrint(new Set([ 'heck' ]))}`
      }))
    );
  });
});
