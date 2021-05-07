import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertStringIsNotContainingString } from '../../../../lib/assertions/forStrings/assertStringIsNotContainingString';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertStringIsNotContainingString', (): void => {
  test('does not return an error if actual does not contain expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'heck';

    assert.that(
      assertStringIsNotContainingString(actual, expected)
    ).is.aValue();
  });

  test('returns an error if actual contains expected.', async (): Promise<void> => {
    const actual = 'foo bar bam';
    const expected = 'bar';

    assert.that(
      assertStringIsNotContainingString(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The string is containing the sub-string.',
        actual: prettyPrint(actual),
        expected: `To not contain:\n"bar"`
      }))
    );
  });
});
