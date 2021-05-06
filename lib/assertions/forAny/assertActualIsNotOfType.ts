import { isArray } from '../../types/isArray';
import { isBoolean } from '../../types/isBoolean';
import { isFunction } from '../../types/isFunction';
import { isMap } from '../../types/isMap';
import { isNull } from '../../types/isNull';
import { isNumber } from '../../types/isNumber';
import { isObject } from '../../types/isObject';
import { isSet } from '../../types/isSet';
import { isString } from '../../types/isString';
import { isSymbol } from '../../types/isSymbol';
import { isUndefined } from '../../types/isUndefined';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { Type } from '../../types/Type';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { error, isError, isResult, Result, value } from 'defekt';

const assertActualIsNotOfType = function (
  actual: any,
  expected: Type
): Result<undefined, AssertionFailed> {
  switch (expected) {
    case 'array': {
      if (isArray(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type array.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'boolean': {
      if (isBoolean(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type boolean.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'error': {
      if (isError(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type error.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'function': {
      if (isFunction(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type function.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'map': {
      if (isMap(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type map.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'null': {
      if (isNull(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type null.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'number': {
      if (isNumber(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type number.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'result': {
      if (isResult(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type result.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'set': {
      if (isSet(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type set.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'string': {
      if (isString(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type string.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'symbol': {
      if (isSymbol(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type symbol.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'undefined': {
      if (isUndefined(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type undefined.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    case 'object': {
      if (isObject(actual)) {
        return error(new AssertionFailed({
          message: 'The value is of type object.',
          actual: prettyPrint(actual)
        }));
      }
      break;
    }
    default: {
      throw new InvalidOperation();
    }
  }

  return value();
};

export {
  assertActualIsNotOfType
};
