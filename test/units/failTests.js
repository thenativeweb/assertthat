'use strict';

const chai = require('chai').assert;

const fail = require('../../lib/fail');

suite('fail', () => {
  test('is a function.', done => {
    chai.typeOf(fail, 'function');
    done();
  });

  test('throws an error if the message is missing.', done => {
    chai.throw(() => {
      fail();
    }, 'Message is missing.');
    done();
  });

  test('throws an error if the values are missing.', done => {
    chai.throw(() => {
      fail('Expected %s to equal %s.');
    }, 'Values are missing.');
    done();
  });

  test('throws an error with the given values.', done => {
    chai.throw(() => {
      fail('Expected %s to equal %s.', [ 23, 42 ]);
    }, 'Expected 23 to equal 42.');
    done();
  });
});
