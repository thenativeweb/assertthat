'use strict';

var fail = require('../fail');

var throwing = function (actual) {
  return function (expected) {
    try {
      actual();
    } catch (err) {
      if (!expected) {
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

module.exports = throwing;
