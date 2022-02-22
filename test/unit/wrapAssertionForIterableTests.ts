import { assert } from '../../lib';
import { assertAnyIsEqualToExpected } from '../../lib/assertions/forAny/assertAnyIsEqualToExpected';
import { assertFunctionIsThrowingAsync } from '../../lib/assertions/forFunctions/assertFunctionIsThrowingAsync';
import { wrapAssertionForIterable, wrapAsyncAssertionForIterable } from '../../lib/wrapAssertionForIterable';

suite('wrapAssertionForIterable', (): void => {
  test('it augments the error message to point to the relevant item of the array.', async (): Promise<void> => {
    const aValue = [ 'foo', 'foo', 'bar', 'foo' ];

    const assertEachIsEqualTo = wrapAssertionForIterable(assertAnyIsEqualToExpected);

    const result = assertEachIsEqualTo(aValue, 'foo');

    if (result.hasError()) {
      assert.that(result.error.message).is.startingWith('Assertion failed for item 2 of the array.\n');
    } else {
      throw new Error('heck this should have been an error');
    }
  });

  test('it augments the error message to point to the relevant item of the set.', async (): Promise<void> => {
    const aValue = new Set([ 'foo', 'bar' ]);

    const assertEachIsEqualTo = wrapAssertionForIterable(assertAnyIsEqualToExpected);

    const result = assertEachIsEqualTo(aValue, 'foo');

    if (result.hasError()) {
      assert.that(result.error.message).is.startingWith('Assertion failed for item "bar" of the set.\n');
    } else {
      throw new Error('heck this should have been an error');
    }
  });

  test('it augments the error message to point to the relevant item of the map.', async (): Promise<void> => {
    const aValue = new Map<string, string>();

    aValue.set('foo', 'foo');
    aValue.set('bar', 'bar');

    const assertEachIsEqualTo = wrapAssertionForIterable(assertAnyIsEqualToExpected);

    const result = assertEachIsEqualTo(aValue, 'foo');

    if (result.hasError()) {
      assert.that(result.error.message).is.startingWith('Assertion failed for item "bar" of the map.\n');
    } else {
      throw new Error('heck this should have been an error');
    }
  });

  suite('wrapAsyncAssertionForIterable', (): void => {
    test('it augments the error message to point to the relevant item of the array.', async (): Promise<void> => {
      const aValue = [
        async (): Promise<void> => {
          throw new Error('Foo.');
        },
        async (): Promise<number> => 5
      ];

      const assertEachIsThrowingAsync = wrapAsyncAssertionForIterable(assertFunctionIsThrowingAsync);

      const result = await assertEachIsThrowingAsync(aValue);

      if (result.hasError()) {
        assert.that(result.error.message).is.startingWith('Assertion failed for item 1 of the array.\n');
      } else {
        throw new Error('heck this should have been an error');
      }
    });

    test('it augments the error message to point to the relevant item of the set.', async (): Promise<void> => {
      const aValue = new Set([
        async (): Promise<void> => {
          throw new Error('Foo.');
        },
        async (): Promise<number> => 5
      ]);

      const assertEachIsThrowingAsync = wrapAsyncAssertionForIterable(assertFunctionIsThrowingAsync);

      const result = await assertEachIsThrowingAsync(aValue);

      if (result.hasError()) {
        assert.that(result.error.message).is.startingWith('Assertion failed for item function  (...) { ... } of the set.\n');
      } else {
        throw new Error('heck this should have been an error');
      }
    });

    test('it augments the error message to point to the relevant item of the map.', async (): Promise<void> => {
      const aValue = new Map<string, (...args: any[]) => any>([
        [ 'foo', async (): Promise<void> => {
          throw new Error('Foo.');
        } ],
        [ 'bar', async (): Promise<number> => 5 ]
      ]);

      const assertEachIsThrowingAsync = wrapAsyncAssertionForIterable(assertFunctionIsThrowingAsync);

      const result = await assertEachIsThrowingAsync(aValue);

      if (result.hasError()) {
        assert.that(result.error.message).is.startingWith('Assertion failed for item "bar" of the map.\n');
      } else {
        throw new Error('heck this should have been an error');
      }
    });
  });
});
