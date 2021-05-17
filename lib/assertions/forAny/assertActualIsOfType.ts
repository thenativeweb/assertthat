import { dispel } from '../../dispel/dispel';
import { prettyPrint } from '../../prettyPrint/typeAware/prettyPrint';
import { AssertionFailed, InvalidOperation } from '../../errors';
import { error, isResult, Result, value } from 'defekt';
import { isArray, isBoolean, isError, isFunction, isMap, isNull, isNumber, isObject, isSet, isString, isSymbol, isUndefined, Type } from 'typedescriptor';

const assertActualIsOfType = function (
  actual: any,
  expected: Type | 'result'
): Result<undefined, AssertionFailed> {
  const dispelledActual = dispel(actual);

  switch (expected) {
    case 'array': {
      if (!isArray(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type array.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'boolean': {
      if (!isBoolean(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type boolean.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'error': {
      if (!isError(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type error.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'function': {
      if (!isFunction(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type function.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'map': {
      if (!isMap(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type map.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'null': {
      if (!isNull(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type null.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'number': {
      if (!isNumber(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type number.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'result': {
      if (!isResult(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type result.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'set': {
      if (!isSet(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type set.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'string': {
      if (!isString(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type string.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'symbol': {
      if (!isSymbol(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type symbol.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'undefined': {
      if (!isUndefined(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type undefined.',
          actual: prettyPrint(dispelledActual)
        }));
      }
      break;
    }
    case 'object': {
      if (!isObject(actual)) {
        return error(new AssertionFailed({
          message: 'The value is not of type object.',
          actual: prettyPrint(dispelledActual)
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
  assertActualIsOfType
};
