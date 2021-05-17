import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotStartingWithString } from '../../../../lib/assertions/forStrings/assertStringIsNotStartingWithString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsNotStartingWith', (): void => {
  test('does not return an error if actual does not start with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsNotStartingWithString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual starts with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'foo';

    assert.that(
      assertStringIsNotStartingWithString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is starting with the sub-string.',
        actual: prettyPrint(actual),
        expected: `To not start with:\n"foo"`
      }))
    );
  });
});
