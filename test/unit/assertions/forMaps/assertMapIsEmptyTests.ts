import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertMapIsEmpty } from '../../../../lib/assertions/forMaps/assertMapIsEmpty';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertMapIsEmpty', (): void => {
  test('does not return an error if the map is empty.', async (): Promise<void> => {
    const actual = new Map();

    assert.that(
      assertMapIsEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the map is not empty.', async (): Promise<void> => {
    const actual = new Map([[ 'foo', 'bar' ]]);

    assert.that(
      assertMapIsEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The map is not empty.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
