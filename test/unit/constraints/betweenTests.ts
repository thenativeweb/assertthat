import between from '../../../lib/constraints/between';
import chaiStatic from 'chai';

const chai = chaiStatic.assert;

suite('between', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(between, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(between(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is between the expected lower and upper bounds.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        between(23)(7, 42);
      });
    });

    test('throws an error if actual is not between the expected lower and upper bounds.', async (): Promise<void> => {
      chai.throw((): void => {
        between(7)(23, 42);
      }, 'Expected 7 to be between 23 and 42.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(between.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(between.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not between the expected lower and upper bounds.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          between.negated(42)(7, 23);
        });
      });

      test('throws an error if actual is between the expected lower and upper bounds.', async (): Promise<void> => {
        chai.throw((): void => {
          between.negated(23)(7, 42);
        }, 'Expected 23 not to be between 7 and 42.');
      });
    });
  });
});
