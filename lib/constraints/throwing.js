'use strict';

var fail = require('../fail');

var throwing = function (actual) {
  return function (expected) {
    try {
      actual();
    } catch (err) {
      if (!expected && expected !== '') {
        return;
      }

      if (expected instanceof RegExp && expected.test(err.message)) {
        return;
      }

      if (err.message === expected) {
        return;
      }

      /*eslint-disable consistent-return*/
      return fail('Expected %s to equal %s.', [ err.message, expected ]);
      /*eslint-enable consistent-return*/
    }

    if (!expected) {
      /*eslint-disable consistent-return*/
      return fail('Expected an exception.', []);
      /*eslint-enable consistent-return*/
    }

    fail('Expected an exception with message %s.', [ expected ]);
  };
};

throwing.negated = function (actual) {
  return function (expected) {
    try {
      actual();
    } catch (err) {
      if (!expected && expected !== '') {
        return fail('Expected not to throw an exception.', []);
      }

      if (expected instanceof RegExp && expected.test(err.message)) {
        return fail('Expected not to throw an exception with message %s.', [ expected ]);
      }

      if (err.message === expected) {
        return fail('Expected not to throw an exception with message %s.', [ expected ]);
      }
    }
  };
};

module.exports = throwing;
