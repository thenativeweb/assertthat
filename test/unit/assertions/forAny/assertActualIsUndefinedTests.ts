import { assert } from '../../../../lib';
import { assertAnyIsUndefined } from '../../../../lib/assertions/forAny/assertAnyIsUndefined';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsUndefined', (): void => {
  test('does not return an error if actual is undefined.', async (): Promise<void> => {
    const actual = undefined;

    assert.that(
      assertAnyIsUndefined(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not undefined.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsUndefined(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is not undefined.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
