import { assert } from '../../../../lib/assertthat';
import { assertFunctionIsThrowing } from '../../../../lib/assertions/forFunctions/assertFunctionIsThrowing';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertFunctionIsThrowing', (): void => {
  test('does not return an error if actual is throwing an error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsThrowing(fun)).is.equalTo(value());
  });

  test('returns an error if actual is not throwing an error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      // Intentionally left blank.
    };

    assert.that(assertFunctionIsThrowing(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function did not throw an exception.'
      }))
    );
  });

  test('does not return an error if actual is throwing an error with the correct message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsThrowing(fun, 'Foo')).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error with an incorrect message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsThrowing(fun, 'Bar')).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: 'The message should have been:\nBar',
        actual: 'Error message:\nFoo'
      }))
    );
  });

  test('does not return an error if actual is throwing an error whose message matches the RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    const regExp = /^Foo.*/u;

    assert.that(assertFunctionIsThrowing(fun, regExp)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error whose message does not match the RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    const regExp = /^Not foo.*/u;

    assert.that(assertFunctionIsThrowing(fun, regExp)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: `The message should have matched:\n${regExp.toString()}`,
        actual: 'Error message:\nFoo bar.'
      }))
    );
  });

  test('does not return an error if actual is throwing an error that fulfils the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const predicate = (ex: Error): boolean => ex.message === 'Foo bar.';

    assert.that(assertFunctionIsThrowing(fun, predicate)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error that does not fulfil the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const predicate = (ex: Error): boolean => ex.message === 'Not foo.';

    assert.that(assertFunctionIsThrowing(fun, predicate)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: 'The exception should have fulfilled a predicate.',
        actual: 'Error message:\nFoo bar.'
      }))
    );
  });
});
