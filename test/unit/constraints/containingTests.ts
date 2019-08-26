import chaiStatic from 'chai';
import containing from '../../../lib/constraints/containing';

const chai = chaiStatic.assert;

suite('containing', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(containing, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(containing('foobar'), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual contains expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        containing('foobar')('ooba');
      });
    });

    test('throws an error if actual does not contain expected.', async (): Promise<void> => {
      chai.throw((): void => {
        containing('foobar')('nufta');
      }, 'Expected \'foobar\' to contain \'nufta\'.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(containing.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(containing.negated('foobar'), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual does not contain expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          containing.negated('foobar')('nufta');
        });
      });

      test('throws an error if actual contains expected.', async (): Promise<void> => {
        chai.throw((): void => {
          containing.negated('foobar')('ooba');
        }, 'Expected \'foobar\' not to contain \'ooba\'.');
      });
    });
  });
});
