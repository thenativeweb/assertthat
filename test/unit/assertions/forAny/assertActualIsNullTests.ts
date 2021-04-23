import { assert } from '../../../../lib';
import { assertActualIsNull } from '../../../../lib/assertions/forAny/assertActualIsNull';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsNull', (): void => {
  test('does not return an error if actual is null.', async (): Promise<void> => {
    const actual = null;

    assert.that(
      assertActualIsNull(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not null.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertActualIsNull(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is not null.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
