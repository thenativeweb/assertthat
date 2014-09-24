'use strict';

var assert = require('../lib/assert.js');

suite('is.NaN', function () {
  test('NaN => ok', function (done) {
    assert.doesNotThrow(function () {
      /*eslint-disable new-cap*/
      assert.that(NaN, is.NaN());
      /*eslint-enable new-cap*/
    });
    done();
  });

  test('not NaN => exception', function (done) {
    assert.throws(function () {
      /*eslint-disable new-cap*/
      assert.that(undefined, is.NaN());
      /*eslint-enable new-cap*/
    });
    done();
  });
});

suite('is.not.NaN', function () {
  test('NaN => exception', function (done) {
    assert.throws(function () {
      /*eslint-disable new-cap*/
      assert.that(NaN, is.not.NaN());
      /*eslint-enable new-cap*/
    });
    done();
  });

  test('not NaN => ok', function (done) {
    assert.doesNotThrow(function () {
      /*eslint-disable new-cap*/
      assert.that(undefined, is.not.NaN());
      /*eslint-enable new-cap*/
    });
    done();
  });
});
