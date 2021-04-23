import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotAtLeastNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsNotAtLeastNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNotAtLeastNumber', (): void => {
  test('does not return an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 8;
    const expected = 15;

    assert.that(
      assertNumberIsNotAtLeastNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsNotAtLeastNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is greater than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be at least:\n${prettyPrint(expected)}`
      }))
    );
  });

  test('returns an error if actual is greater than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 7;

    assert.that(
      assertNumberIsNotAtLeastNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is greater than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be at least:\n${prettyPrint(expected)}`
      }))
    );
  });
});
