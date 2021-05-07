import { assert } from '../../../../lib/assertthat';
import { AssertionFailed } from '../../../../lib/errors';
import { assertObjectIsNotInstanceOfClass } from '../../../../lib/assertions/forObjects/assertObjectIsNotInstanceOfClass';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';

suite('assertObjectIsNotInstanceOfClass', (): void => {
  test('does not return an error if the object is not an instance of the class.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class TestClass {}

    const actual = {};

    assert.that(
      assertObjectIsNotInstanceOfClass(actual, TestClass)
    ).is.aValue();
  });

  test('returns an error if the object is an instance of the class.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class TestClass {}

    const actual = new TestClass();

    assert.that(
      assertObjectIsNotInstanceOfClass(actual, TestClass)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The object is an instance of the class.',
        actual: prettyPrint(actual),
        expected: 'To not be an instance of:\nTestClass'
      }))
    );
  });
});
