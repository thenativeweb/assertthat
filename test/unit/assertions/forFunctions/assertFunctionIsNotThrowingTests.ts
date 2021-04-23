import { assert } from '../../../../lib/assertthat';
import { assertFunctionIsNotThrowing } from '../../../../lib/assertions/forFunctions/assertFunctionIsNotThrowing';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertFunctionIsNotThrowing', (): void => {
  test('does not return an error if actual is not throwing an error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      // Intentionally left blank.
    };

    assert.that(assertFunctionIsNotThrowing(fun)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsNotThrowing(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        actual: 'Error message:\nFoo'
      }))
    );
  });

  test('does not return an error if actual is not throwing an error that is equal to the given message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsNotThrowing(fun, 'Not foo')).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error that is equal to the given message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo');
    };

    assert.that(assertFunctionIsNotThrowing(fun, 'Foo')).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: 'The message should not have been:\nFoo',
        actual: 'Error message:\nFoo'
      }))
    );
  });

  test('does not return an error if actual is throwing an error that does not match the given RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Bar.');
    };
    const regExp = /^Foo.*/u;

    assert.that(assertFunctionIsNotThrowing(fun, regExp)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error whose message matches the given RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    const regExp = /^Foo.*/u;

    assert.that(assertFunctionIsNotThrowing(fun, regExp)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: `The message should not have matched:\n${regExp.toString()}`,
        actual: 'Error message:\nFoo bar.'
      }))
    );
  });

  test('does not return an error if actual is not throwing an error that fulfils the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const predicate = (ex: Error): boolean => ex.message === 'Not foo.';

    assert.that(assertFunctionIsNotThrowing(fun, predicate)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an error that fulfils the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      throw new Error('Foo bar.');
    };
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const predicate = (ex: Error): boolean => ex.message === 'Foo bar.';

    assert.that(assertFunctionIsNotThrowing(fun, predicate)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected exception.',
        expected: 'The exception should not have fulfilled a predicate.',
        actual: 'Error message:\nFoo bar.'
      }))
    );
  });
});
