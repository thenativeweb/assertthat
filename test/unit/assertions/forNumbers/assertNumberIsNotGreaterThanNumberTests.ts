import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotGreaterThanNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsNotGreaterThanNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNotGreaterThanNumber', (): void => {
  test('does not return an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsNotGreaterThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('does not return an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 8;
    const expected = 15;

    assert.that(
      assertNumberIsNotGreaterThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is greater than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 7;

    assert.that(
      assertNumberIsNotGreaterThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is greater than the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be greater than:\n${prettyPrint(expected)}`
      }))
    );
  });
});
