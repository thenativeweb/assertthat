import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertResultIsAnErrorWithMessage } from '../../../../lib/assertions/forResults/assertResultIsAnErrorWithMessage';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintString } from '../../../../lib/prettyPrint/forStrings/prettyPrintString';
import { error, value } from 'defekt';

suite('assertResultIsAnErrorWithMessage', (): void => {
  test('does not return an error if actual is an error result with the expected message.', async (): Promise<void> => {
    const actual = error(new Error('foo'));

    assert.that(
      assertResultIsAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is a value result.', async (): Promise<void> => {
    const actual = value();

    assert.that(
      assertResultIsAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The result is a value.',
        expected: `To be an error with message ${prettyPrintString('foo')}.`
      }))
    );
  });

  test('returns an error if actual is an error result with the wrong message.', async (): Promise<void> => {
    const actual = error(new Error('bar'));

    assert.that(
      assertResultIsAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The error does not have the expected message.',
        expected: `To have the message ${prettyPrintString('foo')}`,
        actual: prettyPrint(actual.error.message)
      }))
    );
  });
});
