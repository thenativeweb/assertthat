import { assert } from '../../../../lib';
import { assertAnyIsNotNull } from '../../../../lib/assertions/forAny/assertAnyIsNotNull';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotNull', (): void => {
  test('does not return an error if actual is not null.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsNotNull(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is null.', async (): Promise<void> => {
    const actual = null;

    assert.that(
      assertAnyIsNotNull(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is null.'
      }))
    );
  });
});
