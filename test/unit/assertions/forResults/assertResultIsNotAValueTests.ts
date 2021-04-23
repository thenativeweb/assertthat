import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertResultIsNotAValue } from '../../../../lib/assertions/forResults/assertResultIsNotAValue';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertResultIsNotAValue', (): void => {
  test('does not return an error if actual is an error result.', async (): Promise<void> => {
    const actual = error(new Error('foo'));

    assert.that(
      assertResultIsNotAValue(actual)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is a value result.', async (): Promise<void> => {
    const actual = value();

    assert.that(
      assertResultIsNotAValue(actual)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The result is an error.',
        actual: prettyPrint(actual)
      }))
    );
  });
});
