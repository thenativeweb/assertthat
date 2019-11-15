import chaiStatic from 'chai';
import { sameJsonAs } from '../../../lib/constraints/sameJsonAs';

const chai = chaiStatic.assert;

suite('sameJsonAs', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(sameJsonAs, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(sameJsonAs(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is the same JSON as expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        sameJsonAs({ foo: 'bar' })({ foo: 'bar' });
      });
    });

    test('does not throw an error if actual is the same JSON as expected even when functions are used.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        sameJsonAs({
          foo: 'bar',
          bar (): void {
            // Intentionally left blank.
          }
        })({
          foo: 'bar'
        });
      });
    });

    test('throws an error if actual is not the same JSON as expected.', async (): Promise<void> => {
      chai.throw((): void => {
        sameJsonAs({ foo: 'bar' })({ foo: 'baz' });
      }, 'Expected {\n  foo: \'bar\'\n} to equal {\n  foo: \'baz\'\n}.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(sameJsonAs.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(sameJsonAs.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not the same JSON as expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          sameJsonAs.negated({ foo: 'bar' })({ foo: 'baz' });
        });
      });

      test('throws an error if actual is the same JSON as expected.', async (): Promise<void> => {
        chai.throw((): void => {
          sameJsonAs.negated({ foo: 'bar' })({ foo: 'bar' });
        }, 'Expected {\n  foo: \'bar\'\n} not to equal {\n  foo: \'bar\'\n}.');
      });

      test('throws an error if actual is the same JSON as expected even when functions are used.', async (): Promise<void> => {
        chai.throw((): void => {
          /* eslint-disable no-inline-comments */
          sameJsonAs.negated({
            foo: 'bar',
            bar (): void { /* Intentionally left blank. */ }
          })({
            foo: 'bar'
          });
          /* eslint-enable no-inline-comments */
        }, 'Expected {\n  foo: \'bar\',\n  bar: bar() { }\n} not to equal {\n  foo: \'bar\'\n}.');
      });
    });
  });
});
