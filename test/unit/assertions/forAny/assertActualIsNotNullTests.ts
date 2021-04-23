import { assert } from '../../../../lib';
import { assertActualIsNotNull } from '../../../../lib/assertions/forAny/assertActualIsNotNull';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsNotNull', (): void => {
  test('does not return an error if actual is not null.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertActualIsNotNull(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is null.', async (): Promise<void> => {
    const actual = null;

    assert.that(
      assertActualIsNotNull(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is null.'
      }))
    );
  });
});
