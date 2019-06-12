'use strict';

/* eslint-disable no-unused-vars */
const regeneratorRuntime = require('regenerator-runtime');
/* eslint-enable no-unused-vars */

const fail = require('../fail');

const throwing = function (actual) {
  return async function (expected) {
    try {
      await actual();
    } catch (ex) {
      if (!expected && expected !== '') {
        return;
      }

      if (expected instanceof RegExp && expected.test(ex.message)) {
        return;
      }
      if (typeof expected === 'function') {
        if (expected(ex)) {
          return;
        }

        return fail('Expected %s to fulfill predicate.', [ ex.message ]);
      }

      if (ex.message === expected) {
        return;
      }

      /* eslint-disable consistent-return */
      return fail('Expected %s to equal %s.', [ ex.message, expected ]);
      /* eslint-enable consistent-return */
    }

    if (!expected) {
      /* eslint-disable consistent-return */
      return fail('Expected an exception.', []);
      /* eslint-enable consistent-return */
    }

    fail('Expected an exception with message %s.', [ expected ]);
  };
};

throwing.negated = function (actual) {
  return async function (expected) {
    try {
      await actual();
    } catch (ex) {
      if (!expected && expected !== '') {
        return fail(`Expected not to throw an exception (received: '${ex.message}').`, []);
      }

      if (expected instanceof RegExp && expected.test(ex.message)) {
        return fail('Expected not to throw an exception with message %s.', [ expected ]);
      }
      if (typeof expected === 'function') {
        if (expected(ex)) {
          return fail('Expected %s not to fulfill predicate.', [ ex.message ]);
        }

        return;
      }

      if (ex.message === expected) {
        return fail('Expected not to throw an exception with message %s.', [ expected ]);
      }
    }
  };
};

module.exports = throwing;
