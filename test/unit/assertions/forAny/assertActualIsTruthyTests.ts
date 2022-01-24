import { assert } from '../../../../lib';
import { assertAnyIsTruthy } from '../../../../lib/assertions/forAny/assertAnyIsTruthy';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsTruthy', (): void => {
  test('does not return an error if actual is truthy.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsTruthy(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not truthy.', async (): Promise<void> => {
    const actual = 0;

    assert.that(
      assertAnyIsTruthy(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is not truthy.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
