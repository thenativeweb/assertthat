import { assert } from '../../../../lib/assertthat';
import { assertBooleanIsFalse } from '../../../../lib/assertions/forBooleans/assertBooleanIsFalse';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertBooleanIsFalse', (): void => {
  test('does not return an error if actual is false.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertBooleanIsFalse(actual)).is.equalTo(value());
  });

  test('returns an error if actual is not false.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertBooleanIsFalse(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The boolean is not false.'
    })));
  });
});
