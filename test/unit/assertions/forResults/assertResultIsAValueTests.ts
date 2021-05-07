import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertResultIsAValue } from '../../../../lib/assertions/forResults/assertResultIsAValue';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertResultIsAValue', (): void => {
  test('does not return an error if actual is a value result.', async (): Promise<void> => {
    const actual = value();

    assert.that(
      assertResultIsAValue(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is an error result.', async (): Promise<void> => {
    const actual = error(new Error('foo'));

    assert.that(
      assertResultIsAValue(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The result is an error.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
