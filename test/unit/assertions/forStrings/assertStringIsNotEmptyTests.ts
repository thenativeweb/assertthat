import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotEmpty } from '../../../../lib/assertions/forStrings/assertStringIsNotEmpty';
import { error, value } from 'defekt';

suite('assertStringIsNotEmpty', (): void => {
  test('does not return an error if the string is not empty.', async (): Promise<void> => {
    const actual = 'foo';

    assert.that(
      assertStringIsNotEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the string is empty.', async (): Promise<void> => {
    const actual = '';

    assert.that(
      assertStringIsNotEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is empty.'
      }))
    );
  });
});
