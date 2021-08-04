import { assert } from '../../../../lib/assertthat';
import { assertFunctionIsNotThrowingAsync } from '../../../../lib/assertions/forFunctions/assertFunctionIsNotThrowingAsync';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertFunctionIsNotThrowingAsync', (): void => {
  test('returns an error if actual is not returning a promise.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fun = (): void => {
      // Intentionally left empty.
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function did not return a Promise.'
      }))
    );
  });

  test('does not return an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      // Intentionally left empty.
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynochronous error.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        actual: 'Error message:\nFoo'
      }))
    );
  });

  test('does not return an error if actual is not throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun, 'Not foo')).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun, 'Foo')).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: 'The message should not have been:\nFoo',
        actual: 'Error message:\nFoo'
      }))
    );
  });

  test('does not return an error if actual is throwing an asynchronous error that does not match the given RegExp.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Not foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun, /^Foo.*/u)).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error whose message matches the given RegExp.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Foo bar');
    };
    const regExp = /^Foo.*/u;

    assert.that(await assertFunctionIsNotThrowingAsync(fun, regExp)).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: `The message should not have matched:\n${regExp.toString()}`,
        actual: 'Error message:\nFoo bar'
      }))
    );
  });

  test('does not return an error if actual is not throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Not foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun, (ex): boolean => ex.message === 'Foo')).is.equalTo(value());
  });

  test('returns an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
    const fun = async (): Promise<void> => {
      throw new Error('Foo');
    };

    assert.that(await assertFunctionIsNotThrowingAsync(fun, (ex): boolean => ex.message === 'Foo')).is.equalTo(
      error(new AssertionFailed({
        message: 'The function threw an unexpected asynchronous exception.',
        expected: 'The exception should not have fulfilled a predicate.',
        actual: 'Error message:\nFoo'
      }))
    );
  });
});
