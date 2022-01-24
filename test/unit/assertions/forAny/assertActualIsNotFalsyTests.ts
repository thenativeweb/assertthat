import { assert } from '../../../../lib';
import { assertAnyIsNotFalsy } from '../../../../lib/assertions/forAny/assertAnyIsNotFalsy';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsNotFalsy', (): void => {
  test('does not return an error if actual is not falsy.', async (): Promise<void> => {
    const actual = 15;

    assert.that(
      assertAnyIsNotFalsy(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is falsy.', async (): Promise<void> => {
    const actual = 0;

    assert.that(
      assertAnyIsNotFalsy(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The value is falsy.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
