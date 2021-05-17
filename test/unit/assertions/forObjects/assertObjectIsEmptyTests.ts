import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsEmpty } from '../../../../lib/assertions/forObjects/assertObjectIsEmpty';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertObjectIsEmpty', (): void => {
  test('does not return an error if actual is an empty object.', async (): Promise<void> => {
    const actual = {};

    assert.that(
      assertObjectIsEmpty(actual)
    ).is.aValue();
  });

  test('returns an error if actual is not an empty object.', async (): Promise<void> => {
    const actual = { foo: 'bar' };

    assert.that(
      assertObjectIsEmpty(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The object is not empty.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
