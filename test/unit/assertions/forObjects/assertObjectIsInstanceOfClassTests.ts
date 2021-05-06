import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsInstanceOfClass } from '../../../../lib/assertions/forObjects/assertObjectIsInstanceOfClass';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertObjectIsInstanceOfClass', (): void => {
  test('does not return an error if the object is an instance of the class.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class TestClass {}

    const actual = new TestClass();

    assert.that(
      assertObjectIsInstanceOfClass(actual, TestClass)
    ).is.aValue();
  });

  test('returns an error if the object is not an instance of the class.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class TestClass {}

    const actual = {};

    assert.that(
      assertObjectIsInstanceOfClass(actual, TestClass)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The object is not an instance of the expected class.',
        actual: prettyPrint(actual),
        expected: 'To be an instance of:\nTestClass'
      }))
    );
  });
});
