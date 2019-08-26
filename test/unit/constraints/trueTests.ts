import chaiStatic from 'chai';
import isTrue from '../../../lib/constraints/true';

const chai = chaiStatic.assert;

suite('true', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(isTrue, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(isTrue(true), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is true.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        isTrue(true)();
      });
    });

    test('throws an error if actual is not true.', async (): Promise<void> => {
      chai.throw((): void => {
        isTrue(false)();
      }, 'Expected false to be true.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(isTrue.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(isTrue.negated(true), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not true.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          isTrue.negated(false)();
        });
      });

      test('throws an error if actual is true.', async (): Promise<void> => {
        chai.throw((): void => {
          isTrue.negated(true)();
        }, 'Expected true not to be true.');
      });
    });
  });
});
