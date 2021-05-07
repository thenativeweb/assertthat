import { assert } from '../../../../lib/assertthat';
import { assertActualIsNotIdenticalToExpected } from '../../../../lib/assertions/forAny/assertActualIsNotIdenticalToExpected';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotIdenticalToExpected', (): void => {
  test('does not return an error if actual and expected do not have the same identity, even if they are equal.', async (): Promise<void> => {
    const actual = {};
    const expected = {};

    assert.that(
      assertActualIsNotIdenticalToExpected(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual and expected have the same identity.', async (): Promise<void> => {
    const actual = {};
    const expected = actual;

    assert.that(
      assertActualIsNotIdenticalToExpected(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The values are identical.'
      }))
    );
  });
});
