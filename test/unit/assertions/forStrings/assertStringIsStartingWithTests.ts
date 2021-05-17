import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsStartingWithString } from '../../../../lib/assertions/forStrings/assertStringIsStartingWithString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsStartingWith', (): void => {
  test('does not return an error if actual starts with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'foo';

    assert.that(
      assertStringIsStartingWithString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual does not start with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsStartingWithString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not starting with the expected sub-string.',
        actual: prettyPrint(actual),
        expected: `To start with:\n"heck"`
      }))
    );
  });
});
