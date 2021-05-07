import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertResultIsNotAnErrorWithMessage } from '../../../../lib/assertions/forResults/assertResultIsNotAnErrorWithMessage';
import { prettyPrintString } from '../../../../lib/prettyPrint/forStrings/prettyPrintString';
import { error, value } from 'defekt';

suite('assertResultIsNotAnErrorWithMessage', (): void => {
  test('does not return an error if actual is a value result.', async (): Promise<void> => {
    const actual = value();

    assert.that(
      assertResultIsNotAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      value()
    );
  });

  test('does not return an error if actual is an error result with the wrong message.', async (): Promise<void> => {
    const actual = error(new Error('bar'));

    assert.that(
      assertResultIsNotAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is an error result with the expected message.', async (): Promise<void> => {
    const actual = error(new Error('foo'));

    assert.that(
      assertResultIsNotAnErrorWithMessage(actual, 'foo')
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The error has the expected message.',
        expected: `To not have the message ${prettyPrintString('foo')}`
      }))
    );
  });
});
