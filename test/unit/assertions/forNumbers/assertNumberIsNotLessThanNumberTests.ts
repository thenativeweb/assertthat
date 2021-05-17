import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotLessThanNumber } from '../../../../lib/assertions/forNumbers/assertNumberIsNotLessThanNumber';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNotLessThanNumber', (): void => {
  test('does not return an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 15;

    assert.that(
      assertNumberIsNotLessThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('does not return an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 15;
    const expected = 8;

    assert.that(
      assertNumberIsNotLessThanNumber(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is less than expected.', async (): Promise<void> => {
    const actual = 7;
    const expected = 15;

    assert.that(
      assertNumberIsNotLessThanNumber(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is less than the expected number.',
        actual: prettyPrint(actual),
        expected: `To not be less than:\n${prettyPrint(expected)}`
      }))
    );
  });
});
