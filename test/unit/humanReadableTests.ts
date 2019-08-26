import chaiStatic from 'chai';
import humanReadable from '../../lib/humanReadable';

const chai = chaiStatic.assert;

suite('humanReadable', (): void => {
  test('returns the stringified value when given a number.', async (): Promise<void> => {
    chai.equal(humanReadable(23), '23');
  });

  test('returns the stringified value when given a boolean.', async (): Promise<void> => {
    chai.equal(humanReadable(false), 'false');
  });

  test('returns the stringified value when given undefined.', async (): Promise<void> => {
    chai.equal(humanReadable(undefined), 'undefined');
  });

  test('returns the stringified value when given null.', async (): Promise<void> => {
    chai.equal(humanReadable(null), 'null');
  });

  test('returns a quoted value when given a string.', async (): Promise<void> => {
    chai.equal(humanReadable('foo'), '\'foo\'');
  });

  test('returns a formatted value when given an object.', async (): Promise<void> => {
    chai.equal(humanReadable({
      foo: 'bar'
    }), '{\n  foo: \'bar\'\n}');
  });

  test('returns a formatted value when given a regular expression.', async (): Promise<void> => {
    chai.equal(humanReadable(/foo/u), '/foo/u');
  });

  test('returns a formatted value when given a function.', async (): Promise<void> => {
    /* eslint-disable prefer-arrow-callback */
    chai.equal(humanReadable(function Foo (): void {
      // Intentionally left empty.
    }), 'Foo');
    /* eslint-enable prefer-arrow-callback */
  });

  test('returns a formatted value when given an anonymous function.', async (): Promise<void> => {
    chai.equal(humanReadable((): void => {
      // Intentionally left empty.
    }), '(anonymous)');
  });
});
