import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotEndingWithString } from '../../../../lib/assertions/forStrings/assertStringIsNotEndingWithString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsNotEndingWith', (): void => {
  test('does not return an error if actual does not end with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsNotEndingWithString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual ends with expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'bam';

    assert.that(
      assertStringIsNotEndingWithString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not end withing the expected sub-string.',
        actual: prettyPrint(actual),
        expected: `To not end with:\n"bam"`
      }))
    );
  });
});
