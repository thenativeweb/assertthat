import { assert } from '../../../../lib/assertthat';
import { assertActualIsTrue } from '../../../../lib/assertions/forAny/assertActualIsTrue';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsTrue', (): void => {
  test('does not return an error if actual is true.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertActualIsTrue(actual)).is.equalTo(value());
  });

  test('returns an error if actual is not true.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertActualIsTrue(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is not true.'
    })));
  });
});
