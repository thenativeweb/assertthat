'use strict';

var chai = require('chai').assert;

var fail = require('../lib/fail');

suite('fail', function () {
  test('is a function.', function (done) {
    chai.typeOf(fail, 'function');
    done();
  });

  test('throws an error if the message is missing.', function (done) {
    chai.throw(function () {
      fail();
    }, 'Message is missing.');
    done();
  });

  test('throws an error if the values are missing.', function (done) {
    chai.throw(function () {
      fail('Expected %s to equal %s.');
    }, 'Values are missing.');
    done();
  });

  test('throws an error with the given values.', function (done) {
    chai.throw(function () {
      fail('Expected %s to equal %s.', [ 23, 42 ]);
    }, 'Expected 23 to equal 42.');
    done();
  });
});
