import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotAtMostNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsNotAtMostNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNotAtMostNumber', (): void => {
  test('does not return an error if actual is greater than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 8;

    assert.that(
      assertNumberIsNotAtMostNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsNotAtMostNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be at most:\n${prettyPrint(expected)}`
      }))
    );
  });

  test('returns an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 7;
    const expected = 15;

    assert.that(
      assertNumberIsNotAtMostNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be at most:\n${prettyPrint(expected)}`
      }))
    );
  });
});
