import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsNotEmpty } from '../../../../lib/assertions/forMaps/assertMapIsNotEmpty';
import { error, value } from 'defekt';

suite('assertMapIsNotEmpty', (): void => {
  test('does not return an error if the map is not empty.', async (): Promise<void> => {
    const actual = new Map([[ 'foo', 'bar' ]]);

    assert.that(
      assertMapIsNotEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the map is empty.', async (): Promise<void> => {
    const actual = new Map();

    assert.that(
      assertMapIsNotEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The map is empty.'
      }))
    );
  });
});
