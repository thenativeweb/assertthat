import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsGreaterThanNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsGreaterThanNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsGreaterThanNumber', (): void => {
  test('does not return an error if actual is greater than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 7;

    assert.that(
      assertNumberIsGreaterThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsGreaterThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To be greater than:\n${prettyPrint(expected)}`
      }))
    );
  });

  test('returns an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 8;
    const expected = 15;

    assert.that(
      assertNumberIsGreaterThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To be greater than:\n${prettyPrint(expected)}`
      }))
    );
  });
});
