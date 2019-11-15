import chaiStatic from 'chai';
import { isNan } from '../../../lib/constraints/nan';

const chai = chaiStatic.assert;

suite('NaN', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(isNan, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(isNan(Number.NaN), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is NaN.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        isNan(Number.NaN)();
      });
    });

    test('throws an error if actual is not NaN.', async (): Promise<void> => {
      chai.throw((): void => {
        isNan(23)();
      }, 'Expected 23 to be NaN.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(isNan.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(isNan.negated(Number.NaN), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not NaN.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          isNan.negated(23)();
        });
      });

      test('throws an error if actual is NaN.', async (): Promise<void> => {
        chai.throw((): void => {
          isNan.negated(Number.NaN)();
        }, 'Expected NaN not to be NaN.');
      });
    });
  });
});
