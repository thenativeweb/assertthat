import { assert } from '../../../../lib/assertthat';
import { assertAnyIsFalse } from '../../../../lib/assertions/forAny/assertAnyIsFalse';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsFalse', (): void => {
  test('does not return an error if actual is false.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertAnyIsFalse(actual)).is.equalTo(value());
  });

  test('returns an error if actual is not false.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertAnyIsFalse(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is not false.'
    })));
  });
});
