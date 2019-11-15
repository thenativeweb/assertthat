import chaiStatic from 'chai';
import { equalTo } from '../../../lib/constraints/equalTo';

const chai = chaiStatic.assert;

suite('equalTo', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(equalTo, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(equalTo(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        equalTo(23)(23);
      });
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      chai.throw((): void => {
        equalTo(23)(42);
      }, 'Expected 23 to equal 42.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(equalTo.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(equalTo.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          equalTo.negated(23)(42);
        });
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        chai.throw((): void => {
          equalTo.negated(23)(23);
        }, 'Expected 23 not to equal 23.');
      });
    });
  });
});
