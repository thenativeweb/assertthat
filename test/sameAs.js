'use strict';

var assert = require('../lib/assert.js');

var o1 = { },
    o2 = { };

suite('is.sameAs', function () {
  test('identical => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(o1, is.sameAs(o1));
    });
    done();
  });

  test('not identical => exception', function (done) {
    assert.throws(function () {
      assert.that(o1, is.sameAs(o2));
    });
    done();
  });
});

suite('is.not.sameAs', function () {
  test('identical => exception', function (done) {
    assert.throws(function () {
      assert.that(o1, is.not.sameAs(o1));
    });
    done();
  });

  test('not identical => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(o1, is.not.sameAs(o2));
    });
    done();
  });
});
