import { assert } from '../../../../lib/assertthat';
import { assertArrayIsEmpty } from '../../../../lib/assertions/forArrays/assertArrayIsEmpty';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertArrayIsEmpty', (): void => {
  test('does not return an error if the array is empty.', async (): Promise<void> => {
    const actual: any[] = [];

    assert.that(
      assertArrayIsEmpty(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if the array is not empty.', async (): Promise<void> => {
    const actual = [ 1, 2, 4 ];

    assert.that(
      assertArrayIsEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The array is not empty.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
