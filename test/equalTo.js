'use strict';

var assert = require('../lib/assert.js');

var Foo = function () {
  this.bar = 'bar';
};

suite('is.equalTo', function () {
  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that('foo', is.equalTo('foo'));
    });
    done();
  });

  test('not equal => exception', function (done) {
    assert.throws(function () {
      assert.that('foo', is.equalTo('bar'));
    });
    done();
  });

  suite('for objects', function () {
    test('equal => ok', function (done) {
      assert.doesNotThrow(function () {
        assert.that(new Foo(), is.equalTo({
          bar: 'bar'
        }));
      });
      done();
    });
  });
});

suite('is.not.equalTo', function () {
  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that('foo', is.not.equalTo('foo'));
    });
    done();
  });

  test('not equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that('foo', is.not.equalTo('bar'));
    });
    done();
  });
});
