import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsAtLeastNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsAtLeastNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsAtLeastNumber', (): void => {
  test('does not return an error if actual is greater than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 7;

    assert.that(
      assertNumberIsAtLeastNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('does not return an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsAtLeastNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 8;
    const expected = 15;

    assert.that(
      assertNumberIsAtLeastNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than the expected number.',
        actual: prettyPrint(actual),
        expected: `To be at least:\n${prettyPrint(expected)}`
      }))
    );
  });
});
