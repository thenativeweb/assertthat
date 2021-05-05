import { assert } from '../../../../lib/assertthat';
import { assertActualIsNotTrue } from '../../../../lib/assertions/forAny/assertActualIsNotTrue';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotTrue', (): void => {
  test('does not return an error if actual is not true.', async (): Promise<void> => {
    const actual = false;

    assert.that(assertActualIsNotTrue(actual)).is.equalTo(value());
  });

  test('returns an error if actual is true.', async (): Promise<void> => {
    const actual = true;

    assert.that(assertActualIsNotTrue(actual)).is.equalTo(error(new AssertionFailed({
      message: 'The value is not false.'
    })));
  });
});
