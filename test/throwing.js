'use strict';

var assert = require('../lib/assert.js');

var falsyCode = function () {
  throw new Error('foo');
};

var falsyCode2 = function () {
  throw new Error('bar');
};

var truthyCode = function () {
};

suite('is.throwing', function () {
  test('falsy code => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(falsyCode, is.throwing());
    });
    done();
  });

  test('truthy code => exception', function (done) {
    assert.throws(function () {
      assert.that(truthyCode, is.throwing());
    });
    done();
  });
});

suite('is.throwing with message', function () {
  test('falsy code => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(falsyCode, is.throwing('foo'));
    });
    done();
  });

  test('falsy code with other message => exception', function (done) {
    assert.throws(function () {
      assert.that(falsyCode2, is.throwing('foo'));
    });
    done();
  });

  test('truthy code => exception', function (done) {
    assert.throws(function () {
      assert.that(truthyCode, is.throwing('foo'));
    });
    done();
  });
});

suite('is.not.throwing', function () {
  test('falsy code => exception', function (done) {
    assert.throws(function () {
      assert.that(falsyCode, is.not.throwing());
    });
    done();
  });
  test('truthy code => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(truthyCode, is.not.throwing());
    });
    done();
  });
});

suite('is.not.throwing with message', function () {
  test('falsy code => exception', function (done) {
    assert.throws(function () {
      assert.that(falsyCode, is.not.throwing('foo'));
    });
    done();
  });
  test('falsy code with other message => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(falsyCode2, is.not.throwing('foo'));
    });
    done();
  });
  test('truthy code => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(truthyCode, is.not.throwing('foo'));
    });
    done();
  });
});
