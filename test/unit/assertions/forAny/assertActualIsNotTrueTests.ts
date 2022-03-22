import { assert } from '../../../../lib/assertthat';
import { assertAnyIsNotTrue } from '../../../../lib/assertions/forAny/assertAnyIsNotTrue';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotTrue', (): void => {
  test('does not return an error if actual is not true.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertAnyIsNotTrue(actual)).is.equalTo(value());
  });

  test('returns an error if actual is true.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertAnyIsNotTrue(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is true.'
    })));
  });

  test('does not return an error if actual is something other than false.', async (): Promise<void> => {
    const actual = 'foo';

    assert.that(assertAnyIsNotTrue(actual)).is.equalTo(value());
  });
});
