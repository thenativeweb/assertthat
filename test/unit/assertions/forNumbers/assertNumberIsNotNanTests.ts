import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotNan } from '../../../../lib/assertions/forNumbers/assertNumberIsNotNan';
import { error, value } from 'defekt';

suite('assertNumberIsNotNan', (): void => {
  test('does not return an error if the number is not nan.', async (): Promise<void> => {
    const actual = 17;

    assert.that(
      assertNumberIsNotNan(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the number is nan.', async (): Promise<void> => {
    const actual = Number.NaN;

    assert.that(
      assertNumberIsNotNan(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is nan.'
      }))
    );
  });
});
