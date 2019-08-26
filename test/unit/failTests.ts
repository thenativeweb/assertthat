import chaiStatic from 'chai';
import fail from '../../lib/fail';

const chai = chaiStatic.assert;

suite('fail', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(fail, 'function');
  });

  test('throws an error with the given values.', async (): Promise<void> => {
    chai.throw((): void => {
      fail('Expected %s to equal %s.', [ 23, 42 ]);
    }, 'Expected 23 to equal 42.');
  });
});
