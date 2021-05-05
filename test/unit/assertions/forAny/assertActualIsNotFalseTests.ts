import { assert } from '../../../../lib/assertthat';
import { assertActualIsNotFalse } from '../../../../lib/assertions/forAny/assertActualIsNotFalse';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotFalse', (): void => {
  test('does not return an error if actual is not false.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertActualIsNotFalse(actual)).is.equalTo(value());
  });

  test('returns an error if actual is false.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertActualIsNotFalse(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is false.'
    })));
  });
});
