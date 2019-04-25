'use strict';

const chai = require('chai').assert;

const humanReadable = require('../../lib/humanReadable');

suite('humanReadable', () => {
  test('is a function.', done => {
    chai.typeOf(humanReadable, 'function');
    done();
  });

  test('throws an error when the value is missing.', done => {
    chai.throw(() => {
      humanReadable();
    }, 'Value is missing.');
    done();
  });

  test('returns the stringified value when given a number.', done => {
    chai.equal(humanReadable(23), '23');
    done();
  });

  test('returns the stringified value when given a boolean.', done => {
    chai.equal(humanReadable(false), 'false');
    done();
  });

  test('returns the stringified value when given undefined.', done => {
    chai.equal(humanReadable(undefined), 'undefined');
    done();
  });

  test('returns the stringified value when given null.', done => {
    chai.equal(humanReadable(null), 'null');
    done();
  });

  test('returns a quoted value when given a string.', done => {
    chai.equal(humanReadable('foo'), '\'foo\'');
    done();
  });

  test('returns a formatted value when given an object.', done => {
    chai.equal(humanReadable({
      foo: 'bar'
    }), '{\n  foo: \'bar\'\n}');
    done();
  });

  test('returns a formatted value when given a regular expression.', done => {
    chai.equal(humanReadable(/foo/), '/foo/');
    done();
  });

  test('returns a formatted value when given a function.', done => {
    chai.equal(humanReadable(function Foo () {
      this.bar = 23;
    }), 'Foo');
    done();
  });

  test('returns a formatted value when given an anonymous function.', done => {
    chai.equal(humanReadable(() => {
      this.bar = 23;
    }), '(anonymous)');
    done();
  });
});
