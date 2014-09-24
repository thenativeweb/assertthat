'use strict';

var assert = require('../lib/assert.js');

suite('is.ofType', function () {
  test('number => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.ofType('number'));
    });
    done();
  });

  test('no number => exception', function (done) {
    assert.throws(function () {
      assert.that('foo', is.ofType('number'));
    });
    done();
  });

  test('array => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that([ ], is.ofType('array'));
    });
    done();
  });

  test('no array => exception', function (done) {
    assert.throws(function () {
      assert.that('foo', is.ofType('array'));
    });
    done();
  });
});

suite('is.not.ofType', function () {
  test('number => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.not.ofType('number'));
    });
    done();
  });

  test('no number => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that('foo', is.not.ofType('number'));
    });
    done();
  });

  test('array => exception', function (done) {
    assert.throws(function () {
      assert.that([ ], is.not.ofType('array'));
    });
    done();
  });

  test('no array => ok', function (done) {
    assert.throws(function () {
      assert.that('foo', is.ofType('array'));
    });
    done();
  });
});
