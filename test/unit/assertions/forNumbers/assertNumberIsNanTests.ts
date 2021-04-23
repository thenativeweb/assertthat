import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertNumberIsNan } from '../../../../lib/assertions/forNumbers/assertNumberIsNan';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertNumberIsNan', (): void => {
  test('does not return an error if the number is nan.', async (): Promise<void> => {
    const actual = Number.NaN;

    assert.that(
      assertNumberIsNan(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the number is not nan.', async (): Promise<void> => {
    const actual = 17;

    assert.that(
      assertNumberIsNan(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The number is not nan.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
