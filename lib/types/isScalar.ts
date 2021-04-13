import { isBoolean } from './isBoolean';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { isSymbol } from './isSymbol';

const isScalar = function (value: any): value is number | string | boolean | symbol {
  return isNumber(value) ||
        isString(value) ||
        isBoolean(value) ||
        isSymbol(value);
};

export {
  isScalar
};
