import { isBoolean } from './isBoolean';
import { isNull } from './isNull';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { isSymbol } from './isSymbol';
import { isUndefined } from './isUndefined';

const isScalar = function (value: any): value is number | string | boolean | symbol {
  return isNumber(value) ||
        isString(value) ||
        isBoolean(value) ||
        isSymbol(value) ||
        isUndefined(value) ||
        isNull(value);
};

export {
  isScalar
};
