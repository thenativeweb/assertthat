import { assert } from '../../../../lib/assertthat';
import { assertFunctionIsThrowingAsync } from '../../../../lib/assertions/forFunctions/assertFunctionIsThrowingAsync';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertFunctionIsThrowingAsync', (): void => {
  test('returns an error if actual is not returning a promise.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      // Intentionally left blank.
    };

    assert.that(await assertFunctionIsThrowingAsync(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function did not return a Promise.'
      }))
    );
  });

  test('does not return an error if actual is throwing an asynchronous error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(await assertFunctionIsThrowingAsync(fun)).is.equalTo(value());
  });

  test('returns an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      // Intentionally left blank.
    };

    assert.that(await assertFunctionIsThrowingAsync(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function did not throw an asynchronous exception.'
      }))
    );
  });

  test('does not return an error if actual is throwing an asynchronous error with the correct message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(
      await assertFunctionIsThrowingAsync(fun, 'Foo')
    ).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error with an incorrect message.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Not foo');
    };

    assert.that(await assertFunctionIsThrowingAsync(fun, 'Foo')).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: 'The message should have been:\nFoo',
        actual: 'Error message:\nNot foo'
      }))
    );
  });

  test('does not return an error if actual is throwing an asynchronous error whose message matches the RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Foo bar');
    };

    assert.that(
      await assertFunctionIsThrowingAsync(fun, /^Foo.*/u)
    ).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error whose message does not match the RegExp.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Not foo');
    };
    const regExp = /^Foo.*/u;

    await assert.that(await assertFunctionIsThrowingAsync(fun, regExp)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: `The message should have matched:\n${regExp.toString()}`,
        actual: 'Error message:\nNot foo'
      }))
    );
  });

  test('does not return an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(
      await assertFunctionIsThrowingAsync(fun, (ex): boolean => ex.message === 'Foo')
    ).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error that does not fulfil the predicate.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = async (): Promise<void> => {
      throw new Error('Not foo');
    };

    assert.that(
      await assertFunctionIsThrowingAsync(fun, (ex): boolean => ex.message === 'Foo')
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: 'The exception should have fulfilled a predicate.',
        actual: 'Error message:\nNot foo'
      }))
    );
  });
});
