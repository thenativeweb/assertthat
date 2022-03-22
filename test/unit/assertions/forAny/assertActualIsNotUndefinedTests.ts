import { assert } from '../../../../lib';
import { assertAnyIsNotUndefined } from '../../../../lib/assertions/forAny/assertAnyIsNotUndefined';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotUndefined', (): void => {
  test('does not return an error if actual is not undefined.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsNotUndefined(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is undefined.', async (): Promise<void> => {
    const actual = undefined;

    assert.that(
      assertAnyIsNotUndefined(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is undefined.'
      }))
    );
  });
});
