import { assert } from '../../../../lib';
import { assertAnyIsFalsy } from '../../../../lib/assertions/forAny/assertAnyIsFalsy';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsFalsy', (): void => {
  test('does not return an error if actual is falsy.', async (): Promise<void> => {
    const actual = 0;

    assert.that(
      assertAnyIsFalsy(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not falsy.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsFalsy(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is not falsy.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
