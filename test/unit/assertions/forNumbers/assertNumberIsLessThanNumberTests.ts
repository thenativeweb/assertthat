import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsLessThanNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsLessThanNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsLessThanNumber', (): void => {
  test('does not return an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 7;
    const expected = 15;

    assert.that(
      assertNumberIsLessThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsLessThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is greater than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To be less than:\n${prettyPrint(expected)}`
      }))
    );
  });

  test('returns an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 8;

    assert.that(
      assertNumberIsLessThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is greater than or equal to the expected number.',
        actual: prettyPrint(actual),
        expected: `To be less than:\n${prettyPrint(expected)}`
      }))
    );
  });
});
