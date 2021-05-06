import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsEmpty } from '../../../../lib/assertions/forStrings/assertStringIsEmpty';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertStringIsEmpty', (): void => {
  test('does not return an error if the string is empty.', async (): Promise<void> => {
    const actual = '';

    assert.that(
      assertStringIsEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the string is not empty.', async (): Promise<void> => {
    const actual = 'foo';

    assert.that(
      assertStringIsEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not empty.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
