import { assert } from '../../../../lib/assertthat';
import { assertBooleanIsNotFalse } from '../../../../lib/assertions/forBooleans/assertBooleanIsNotFalse';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertBooleanIsNotFalse', (): void => {
  test('does not return an error if actual is not false.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertBooleanIsNotFalse(actual)).is.equalTo(value());
  });

  test('returns an error if actual is false.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertBooleanIsNotFalse(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The boolean is false.'
    })));
  });
});
