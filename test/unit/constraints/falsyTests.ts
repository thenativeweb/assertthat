import chaiStatic from 'chai';
import { falsy } from '../../../lib/constraints/falsy';

const chai = chaiStatic.assert;

suite('falsy', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(falsy, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(falsy(0), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is falsy.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        falsy(0)();
      });
    });

    test('throws an error if actual is not falsy.', async (): Promise<void> => {
      chai.throw((): void => {
        falsy(23)();
      }, 'Expected 23 to be falsy.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(falsy.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(falsy.negated(0), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not falsy.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          falsy.negated(23)();
        });
      });

      test('throws an error if actual is falsy.', async (): Promise<void> => {
        chai.throw((): void => {
          falsy.negated(0)();
        }, 'Expected 0 not to be falsy.');
      });
    });
  });
});
