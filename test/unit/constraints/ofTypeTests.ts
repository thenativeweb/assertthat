import chaiStatic from 'chai';
import ofType from '../../../lib/constraints/ofType';

const chai = chaiStatic.assert;

suite('ofType', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(ofType, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(ofType(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        ofType(23)('number');
      });
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      chai.throw((): void => {
        ofType(23)('string');
      }, 'Expected 23 to be of type \'string\'.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(ofType.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(ofType.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          ofType.negated(23)('string');
        });
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        chai.throw((): void => {
          ofType.negated(23)('number');
        }, 'Expected 23 not to be of type \'number\'.');
      });
    });
  });
});
