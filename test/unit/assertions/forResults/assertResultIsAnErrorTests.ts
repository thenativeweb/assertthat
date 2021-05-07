import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertResultIsAnError } from '../../../../lib/assertions/forResults/assertResultIsAnError';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertResultIsAnError', (): void => {
  test('does not return an error if actual is an error result.', async (): Promise<void> => {
    const actual = error(new Error('foo'));

    assert.that(
      assertResultIsAnError(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is a value result.', async (): Promise<void> => {
    const actual = value();

    assert.that(
      assertResultIsAnError(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The result is a value.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
