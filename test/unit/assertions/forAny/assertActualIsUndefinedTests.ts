import { assert } from '../../../../lib';
import { assertActualIsUndefined } from '../../../../lib/assertions/forAny/assertActualIsUndefined';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsUndefined', (): void => {
  test('does not return an error if actual is undefined.', async (): Promise<void> => {
    const actual = undefined;

    assert.that(
      assertActualIsUndefined(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not undefined.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertActualIsUndefined(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is not undefined.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
