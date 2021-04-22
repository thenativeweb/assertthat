import { assert } from '../../../../lib/assertthat';
import { assertArrayIsNotEmpty } from '../../../../lib/assertions/forArrays/assertArrayIsNotEmpty';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertArrayIsNotEmpty', (): void => {
  test('does not return an error if the array is not empty.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];

    assert.that(
      assertArrayIsNotEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array is empty.', async (): Promise<void> => {
    const actual: any[] = [];

    assert.that(
      assertArrayIsNotEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array is empty.'
      }))
    );
  });
});
