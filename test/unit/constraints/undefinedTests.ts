import chaiStatic from 'chai';
import isUndefined from '../../../lib/constraints/undefined';

const chai = chaiStatic.assert;

suite('undefined', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(isUndefined, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(isUndefined(undefined), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is undefined.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        isUndefined(undefined)();
      });
    });

    test('throws an error if actual is not undefined.', async (): Promise<void> => {
      chai.throw((): void => {
        isUndefined(23)();
      }, 'Expected 23 to be undefined.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(isUndefined.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(isUndefined.negated(undefined), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not undefined.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          isUndefined.negated(23)();
        });
      });

      test('throws an error if actual is undefined.', async (): Promise<void> => {
        chai.throw((): void => {
          isUndefined.negated(undefined)();
        }, 'Expected undefined not to be undefined.');
      });
    });
  });
});
