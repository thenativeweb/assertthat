import { AssertThatForAny } from './assertions/forAny/AssertThatForAny';
import { AssertThatForArray } from './assertions/forArrays/AssertThatForArray';
import { AssertThatForBoolean } from './assertions/forBooleans/AssertThatForBoolean';
import { AssertThatForFunction } from './assertions/forFunctions/AssertThatForFunction';
import { AssertThatForMap } from './assertions/forMaps/AssertThatForMap';
import { AssertThatForNumber } from './assertions/forNumbers/AssertThatForNumber';
import { AssertThatForObject } from './assertions/forObjects/AssertThatForObject';
import { AssertThatForResult } from './assertions/forResults/AssertThatForResult';
import { AssertThatForSet } from './assertions/forSets/AssertThatForSet';
import { AssertThatForString } from './assertions/forStrings/AssertThatForString';
import { isArray } from './types/isArray';
import { isBoolean } from './types/isBoolean';
import { isFunction } from './types/isFunction';
import { isMap } from './types/isMap';
import { isNumber } from './types/isNumber';
import { isObject } from './types/isObject';
import { isResult } from 'defekt';
import { isSet } from './types/isSet';
import { isString } from './types/isString';
import { getAssertionsForAny, getNegatedAssertionsForAny } from './assertions/forAny/assertions';
import { getAssertionsForArray, getNegatedAssertionsForArray } from './assertions/forArrays/assertions';
import { getAssertionsForBoolean, getNegatedAssertionsForBoolean } from './assertions/forBooleans/assertions';
import { getAssertionsForFunction, getNegatedAssertionsForFunction } from './assertions/forFunctions/assertions';
import { getAssertionsForMap, getNegatedAssertionsForMap } from './assertions/forMaps/assertions';
import { getAssertionsForNumber, getNegatedAssertionsForNumber } from './assertions/forNumbers/assertions';
import { getAssertionsForObject, getNegatedAssertionsForObject } from './assertions/forObjects/assertions';
import { getAssertionsForResult, getNegatedAssertionsForResult } from './assertions/forResults/assertions';
import { getAssertionsForSet, getNegatedAssertionsForSet } from './assertions/forSets/assertions';
import { getAssertionsForString, getNegatedAssertionsForString } from './assertions/forStrings/assertions';

type AssertThat =
  AssertThatForSet &
  AssertThatForMap &
  AssertThatForArray &
  AssertThatForResult &
  AssertThatForNumber &
  AssertThatForString &
  AssertThatForBoolean &
  AssertThatForFunction &
  AssertThatForObject &
  AssertThatForAny;

// eslint-disable-next-line consistent-this
const that: AssertThat = (actual: any): any => ({
  is: {
    ...getAssertionsForAny(actual),

    ...isSet(actual) ? getAssertionsForSet(actual) : {},
    ...isMap(actual) ? getAssertionsForMap(actual) : {},
    ...isArray(actual) ? getAssertionsForArray(actual) : {},
    ...isResult(actual) ? getAssertionsForResult(actual) : {},
    ...isNumber(actual) ? getAssertionsForNumber(actual) : {},
    ...isString(actual) ? getAssertionsForString(actual) : {},
    ...isBoolean(actual) ? getAssertionsForBoolean(actual) : {},
    ...isFunction(actual) ? getAssertionsForFunction(actual) : {},
    ...isObject(actual) ? getAssertionsForObject(actual) : {},

    not: {
      ...getNegatedAssertionsForAny(actual),

      ...isSet(actual) ? getNegatedAssertionsForSet(actual) : {},
      ...isMap(actual) ? getNegatedAssertionsForMap(actual) : {},
      ...isArray(actual) ? getNegatedAssertionsForArray(actual) : {},
      ...isResult(actual) ? getNegatedAssertionsForResult(actual) : {},
      ...isNumber(actual) ? getNegatedAssertionsForNumber(actual) : {},
      ...isString(actual) ? getNegatedAssertionsForString(actual) : {},
      ...isBoolean(actual) ? getNegatedAssertionsForBoolean(actual) : {},
      ...isFunction(actual) ? getNegatedAssertionsForFunction(actual) : {},
      ...isObject(actual) ? getNegatedAssertionsForObject(actual) : {}
    }
  }
});

const assert = {
  that
};

export {
  assert
};
