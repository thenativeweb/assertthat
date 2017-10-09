'use strict';

/* eslint-disable no-unused-vars */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var regeneratorRuntime = require('regenerator-runtime');
/* eslint-enable no-unused-vars */

var fail = require('../fail');

var throwing = function throwing(actual) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(expected) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return actual();

            case 3:
              _context.next = 14;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](0);

              if (!(!expected && expected !== '')) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              if (!(expected instanceof RegExp && expected.test(_context.t0.message))) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('return');

            case 11:
              if (!(_context.t0.message === expected)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return');

            case 13:
              return _context.abrupt('return', fail('Expected %s to equal %s.', [_context.t0.message, expected]));

            case 14:
              if (expected) {
                _context.next = 16;
                break;
              }

              return _context.abrupt('return', fail('Expected an exception.', []));

            case 16:

              fail('Expected an exception with message %s.', [expected]);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 5]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

throwing.negated = function (actual) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(expected) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return actual();

            case 3:
              _context2.next = 13;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2['catch'](0);

              if (!(!expected && expected !== '')) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt('return', fail('Expected not to throw an exception.', []));

            case 9:
              if (!(expected instanceof RegExp && expected.test(_context2.t0.message))) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt('return', fail('Expected not to throw an exception with message %s.', [expected]));

            case 11:
              if (!(_context2.t0.message === expected)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt('return', fail('Expected not to throw an exception with message %s.', [expected]));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 5]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

module.exports = throwing;