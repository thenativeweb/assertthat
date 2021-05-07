import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNaN } from '../../../../lib/assertions/forNumbers/assertNumberIsNaN';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNaN', (): void => {
  test('does not return an error if the number is nan.', async (): Promise<void> => {
    const actual = Number.NaN;

    assert.that(
      assertNumberIsNaN(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the number is not nan.', async (): Promise<void> => {
    const actual = 17;

    assert.that(
      assertNumberIsNaN(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is not nan.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
