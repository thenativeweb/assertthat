import { assert } from '../../../../lib/assertthat';
import { assertBooleanIsTrue } from '../../../../lib/assertions/forBooleans/assertBooleanIsTrue';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertBooleanIsTrue', (): void => {
  test('does not return an error if actual is true.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertBooleanIsTrue(actual)).is.equalTo(value());
  });

  test('returns an error if actual is not true.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertBooleanIsTrue(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The boolean is not true.'
    })));
  });
});
