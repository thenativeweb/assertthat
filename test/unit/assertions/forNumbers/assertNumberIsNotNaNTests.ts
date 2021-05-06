import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNotNaN } from '../../../../lib/assertions/forNumbers/assertNumberIsNotNaN';
import { error, value } from 'defekt';

suite('assertNumberIsNotNaN', (): void => {
  test('does not return an error if the number is not nan.', async (): Promise<void> => {
    const actual = 17;

    assert.that(
      assertNumberIsNotNaN(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the number is nan.', async (): Promise<void> => {
    const actual = Number.NaN;

    assert.that(
      assertNumberIsNotNaN(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is nan.'
      }))
    );
  });
});
