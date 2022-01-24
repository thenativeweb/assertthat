import { assert } from '../../../../lib/assertthat';
import { assertAnyIsNotFalse } from '../../../../lib/assertions/forAny/assertAnyIsNotFalse';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotFalse', (): void => {
  test('does not return an error if actual is not false.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertAnyIsNotFalse(actual)).is.equalTo(value());
  });

  test('returns an error if actual is false.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertAnyIsNotFalse(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is false.'
    })));
  });
});
