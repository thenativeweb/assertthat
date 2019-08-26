import chaiStatic from 'chai';
import isNull from '../../../lib/constraints/null';

const chai = chaiStatic.assert;

suite('null', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(isNull, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(isNull(null), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is null.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        isNull(null)();
      });
    });

    test('throws an error if actual is not null.', async (): Promise<void> => {
      chai.throw((): void => {
        isNull(23)();
      }, 'Expected 23 to be null.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(isNull.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(isNull.negated(null), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not null.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          isNull.negated(23)();
        });
      });

      test('throws an error if actual is null.', async (): Promise<void> => {
        chai.throw((): void => {
          isNull.negated(null)();
        }, 'Expected null not to be null.');
      });
    });
  });
});
