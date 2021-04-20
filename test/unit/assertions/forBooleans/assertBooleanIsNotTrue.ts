import { assert } from '../../../../lib/assertthat';
import { assertBooleanIsNotTrue } from '../../../../lib/assertions/forBooleans/assertBooleanIsNotTrue';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertBooleanIsNotTrue', (): void => {
  test('does not return an error if actual is not true.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertBooleanIsNotTrue(actual)).is.equalTo(value());
  });

  test('returns an error if actual is true.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertBooleanIsNotTrue(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The boolean is not false.'
    })));
  });
});
