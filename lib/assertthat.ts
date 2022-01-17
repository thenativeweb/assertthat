import { AssertThatForAny } from './assertions/forAny/AssertThatForAny';
import { AssertThatForArray } from './assertions/forArrays/AssertThatForArray';
import { AssertThatForFunction } from './assertions/forFunctions/AssertThatForFunction';
import { AssertThatForMap } from './assertions/forMaps/AssertThatForMap';
import { AssertThatForNumber } from './assertions/forNumbers/AssertThatForNumber';
import { AssertThatForObject } from './assertions/forObjects/AssertThatForObject';
import { AssertThatForResult } from './assertions/forResults/AssertThatForResult';
import { AssertThatForSet } from './assertions/forSets/AssertThatForSet';
import { AssertThatForString } from './assertions/forStrings/AssertThatForString';
import { isResult } from 'defekt';
import { getAssertionsForAny, getNegatedAssertionsForAny } from './assertions/forAny/assertions';
import { getAssertionsForArray, getNegatedAssertionsForArray } from './assertions/forArrays/assertions';
import { getAssertionsForFunction, getNegatedAssertionsForFunction } from './assertions/forFunctions/assertions';
import { getAssertionsForMap, getNegatedAssertionsForMap } from './assertions/forMaps/assertions';
import { getAssertionsForNumber, getNegatedAssertionsForNumber } from './assertions/forNumbers/assertions';
import { getAssertionsForObject, getNegatedAssertionsForObject } from './assertions/forObjects/assertions';
import { getAssertionsForResult, getNegatedAssertionsForResult } from './assertions/forResults/assertions';
import { getAssertionsForSet, getNegatedAssertionsForSet } from './assertions/forSets/assertions';
import { getAssertionsForString, getNegatedAssertionsForString } from './assertions/forStrings/assertions';
import { isArray, isFunction, isMap, isNumber, isObject, isSet, isString } from 'typedescriptor';

type AssertThat =
  AssertThatForSet &
  AssertThatForMap &
  AssertThatForArray &
  AssertThatForResult &
  AssertThatForNumber &
  AssertThatForString &
  AssertThatForFunction &
  AssertThatForObject &
  AssertThatForAny;

// eslint-disable-next-line consistent-this
const that: AssertThat = (actual: any): any => ({
  is: {
    ...getAssertionsForAny(actual),

    ...isNumber(actual) ? getAssertionsForNumber(actual) : {},
    ...isString(actual) ? getAssertionsForString(actual) : {},
    ...isFunction(actual) ? getAssertionsForFunction(actual) : {},
    ...isObject(actual) ? getAssertionsForObject(actual) : {},
    ...isSet(actual) ? getAssertionsForSet(actual) : {},
    ...isMap(actual) ? getAssertionsForMap(actual) : {},
    ...isArray(actual) ? getAssertionsForArray(actual) : {},
    ...isResult(actual) ? getAssertionsForResult(actual) : {},

    not: {
      ...getNegatedAssertionsForAny(actual),

      ...isNumber(actual) ? getNegatedAssertionsForNumber(actual) : {},
      ...isString(actual) ? getNegatedAssertionsForString(actual) : {},
      ...isFunction(actual) ? getNegatedAssertionsForFunction(actual) : {},
      ...isObject(actual) ? getNegatedAssertionsForObject(actual) : {},
      ...isSet(actual) ? getNegatedAssertionsForSet(actual) : {},
      ...isMap(actual) ? getNegatedAssertionsForMap(actual) : {},
      ...isArray(actual) ? getNegatedAssertionsForArray(actual) : {},
      ...isResult(actual) ? getNegatedAssertionsForResult(actual) : {}
    }
  }
});

const assert = {
  that
};

export {
  assert
};
