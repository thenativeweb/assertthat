'use strict';

var chai = require('chai').assert;

var humanReadable = require('../lib/humanReadable');

suite('humanReadable', function () {
  test('is a function.', function (done) {
    chai.typeOf(humanReadable, 'function');
    done();
  });

  test('throws an error when the value is missing.', function (done) {
    chai.throw(function () {
      humanReadable();
    }, 'Value is missing.');
    done();
  });

  test('returns the stringified value when given a number.', function (done) {
    chai.equal(humanReadable(23), '23');
    done();
  });

  test('returns the stringified value when given a boolean.', function (done) {
    chai.equal(humanReadable(false), 'false');
    done();
  });

  test('returns the stringified value when given undefined.', function (done) {
    chai.equal(humanReadable(undefined), 'undefined');
    done();
  });

  test('returns the stringified value when given null.', function (done) {
    chai.equal(humanReadable(null), 'null');
    done();
  });

  test('returns a quoted value when given a string.', function (done) {
    chai.equal(humanReadable('foo'), '\'foo\'');
    done();
  });

  test('returns a formatted value when given an object.', function (done) {
    chai.equal(humanReadable({
      foo: 'bar'
    }), '{\n  foo: \'bar\'\n}');
    done();
  });

  test('returns a formatted value when given a regular expression.', function (done) {
    chai.equal(humanReadable(/foo/), '/foo/');
    done();
  });

  test('returns a formatted value when given a function.', function (done) {
    chai.equal(humanReadable(function Foo () {
      this.bar = 23;
    }), 'Foo');
    done();
  });

  test('returns a formatted value when given an anonymous function.', function (done) {
    chai.equal(humanReadable(function () {
      this.bar = 23;
    }), '(anonymous)');
    done();
  });
});
