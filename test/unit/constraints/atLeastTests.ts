import { atLeast } from '../../../lib/constraints/atLeast';
import chaiStatic from 'chai';

const chai = chaiStatic.assert;

suite('atLeast', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(atLeast, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(atLeast(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is at least expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        atLeast(23)(23);
      });
    });

    test('throws an error if actual is not at least expected.', async (): Promise<void> => {
      chai.throw((): void => {
        atLeast(23)(42);
      }, 'Expected 23 to be at least 42.');
    });
  });

  suite('negated', (): void => {
    suite('constraint', (): void => {
      test('does not throw an error if actual is not at least expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          atLeast.negated(23)(42);
        });
      });

      test('throws an error if actual is at least expected.', async (): Promise<void> => {
        chai.throw((): void => {
          atLeast.negated(23)(23);
        }, 'Expected 23 not to be at least 23.');
      });
    });
  });
});
