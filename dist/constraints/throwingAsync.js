'use strict';
/* eslint-disable no-unused-vars */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var regeneratorRuntime = require('regenerator-runtime');
/* eslint-enable no-unused-vars */


var fail = require('../fail');

var throwing = function throwing(actual) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(expected) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return actual();

              case 3:
                _context.next = 18;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);

                if (!(!expected && expected !== '')) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                if (!(expected instanceof RegExp && expected.test(_context.t0.message))) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                if (!(typeof expected === 'function')) {
                  _context.next = 15;
                  break;
                }

                if (!expected(_context.t0)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                return _context.abrupt("return", fail('Expected %s to fulfill predicate.', [_context.t0.message]));

              case 15:
                if (!(_context.t0.message === expected)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return");

              case 17:
                return _context.abrupt("return", fail('Expected %s to equal %s.', [_context.t0.message, expected]));

              case 18:
                if (expected) {
                  _context.next = 20;
                  break;
                }

                return _context.abrupt("return", fail('Expected an exception.', []));

              case 20:
                fail('Expected an exception with message %s.', [expected]);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

throwing.negated = function (actual) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(expected) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return actual();

              case 3:
                _context2.next = 17;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);

                if (!(!expected && expected !== '')) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", fail('Expected not to throw an exception.', []));

              case 9:
                if (!(expected instanceof RegExp && expected.test(_context2.t0.message))) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", fail('Expected not to throw an exception with message %s.', [expected]));

              case 11:
                if (!(typeof expected === 'function')) {
                  _context2.next = 15;
                  break;
                }

                if (!expected(_context2.t0)) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt("return", fail('Expected %s not to fulfill predicate.', [_context2.t0.message]));

              case 14:
                return _context2.abrupt("return");

              case 15:
                if (!(_context2.t0.message === expected)) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt("return", fail('Expected not to throw an exception with message %s.', [expected]));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

module.exports = throwing;