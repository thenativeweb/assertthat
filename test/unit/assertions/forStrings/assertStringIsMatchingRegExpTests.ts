import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsMatchingRegExp } from '../../../../lib/assertions/forStrings/assertStringIsMatchingRegExp';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsMatchingRegExp', (): void => {
  test('does not return an error if actual contains expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = /bar/u;

    assert.that(
      assertStringIsMatchingRegExp(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual does not contain expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = /baz/u;

    assert.that(
      assertStringIsMatchingRegExp(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is not matching the expected regex.',
        actual: prettyPrint(actual),
        expected: `To match:\n${expected.toString()}`
      }))
    );
  });
});
