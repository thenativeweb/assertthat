import chaiStatic from 'chai';
import { isFalse } from '../../../lib/constraints/false';

const chai = chaiStatic.assert;

suite('false', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(isFalse, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(isFalse(false), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is false.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        isFalse(false)();
      });
    });

    test('throws an error if actual is not false.', async (): Promise<void> => {
      chai.throw((): void => {
        isFalse(true)();
      }, 'Expected true to be false.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(isFalse.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(isFalse.negated(false), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not false.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          isFalse.negated(true)();
        });
      });

      test('throws an error if actual is false.', async (): Promise<void> => {
        chai.throw((): void => {
          isFalse.negated(false)();
        }, 'Expected false not to be false.');
      });
    });
  });
});
