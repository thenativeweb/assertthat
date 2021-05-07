import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsContainingString } from '../../../../lib/assertions/forStrings/assertStringIsContainingString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsContainingString', (): void => {
  test('does not return an error if actual contains expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'bar';

    assert.that(
      assertStringIsContainingString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual does not contain expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsContainingString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not containing the expected sub-string.',
        actual: prettyPrint(actual),
        expected: `To contain:\n"heck"`
      }))
    );
  });
});
