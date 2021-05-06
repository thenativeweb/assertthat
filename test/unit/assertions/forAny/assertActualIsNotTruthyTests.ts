import { assert } from '../../../../lib';
import { assertActualIsNotTruthy } from '../../../../lib/assertions/forAny/assertActualIsNotTruthy';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsNotTruthy', (): void => {
  test('does not return an error if actual is not truthy.', async (): Promise<void> => {
    const actual = 0;

    assert.that(
      assertActualIsNotTruthy(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is truthy.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertActualIsNotTruthy(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is truthy.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
