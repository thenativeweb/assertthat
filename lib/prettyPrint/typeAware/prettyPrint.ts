import { InvalidOperation } from '../../errors';
import { isArray } from '../../typeRecognition/isArray';
import { isBoolean } from '../../typeRecognition/isBoolean';
import { isNumber } from '../../typeRecognition/isNumber';
import { isString } from '../../typeRecognition/isString';
import { prettyPrintArray } from '../forArrays/prettyPrintArray';
import { prettyPrintBoolean } from '../forBooleans/prettyPrintBoolean';
import { prettyPrintNumber } from '../forNumbers/prettyPrintNumber';
import { prettyPrintString } from '../forStrings/prettyPrintString';

const prettyPrint = function (value: any, depth = 0): string {
  if (isArray(value)) {
    return prettyPrintArray(value, depth);
  }
  if (isNumber(value)) {
    return prettyPrintNumber(value);
  }
  if (isString(value)) {
    return prettyPrintString(value);
  }
  if (isBoolean(value)) {
    return prettyPrintBoolean(value);
  }

  throw new InvalidOperation('Could not pretty print a value with unknown type.');
};

export {
  prettyPrint
};
