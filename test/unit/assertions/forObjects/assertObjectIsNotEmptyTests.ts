import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsNotEmpty } from '../../../../lib/assertions/forObjects/assertObjectIsNotEmpty';
import { error } from 'defekt';

suite('assertObjectIsNotEmpty', (): void => {
  test('does not return an error if actual is not an empty object.', async (): Promise<void> => {
    const actual = { foo: 'bar' };

    assert.that(
      assertObjectIsNotEmpty(actual)
    ).is.aValue();
  });

  test('returns an error if actual is an empty object.', async (): Promise<void> => {
    const actual = {};

    assert.that(
      assertObjectIsNotEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The object is empty.'
      }))
    );
  });
});
