import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsEndingWithString } from '../../../../lib/assertions/forStrings/assertStringIsEndingWithString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsEndingWith', (): void => {
  test('does not return an error if actual ends with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'bam';

    assert.that(
      assertStringIsEndingWithString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual does not end with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsEndingWithString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not end withing the expected sub-string.',
        actual: prettyPrint(actual),
        expected: `To end with:\n"heck"`
      }))
    );
  });
});
