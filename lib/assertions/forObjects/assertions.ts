import { assertObjectIsAtLeastObject } from './assertObjectIsAtLeastObject';
import { assertObjectIsAtMostObject } from './assertObjectIsAtMostObject';
import { assertObjectIsEmpty } from './assertObjectIsEmpty';
import { assertObjectIsInstanceOfClass } from './assertObjectIsInstanceOfClass';
import { assertObjectIsNotAtLeastObject } from './assertObjectIsNotAtLeastObject';
import { assertObjectIsNotAtMostObject } from './assertObjectIsNotAtMostObject';
import { assertObjectIsNotEmpty } from './assertObjectIsNotEmpty';
import { assertObjectIsNotInstanceOfClass } from './assertObjectIsNotInstanceOfClass';
import { ObjectAssertions } from './ObjectAssertions';
import { report } from '../../report';

const getAssertionsForObject = function (actual: object): ObjectAssertions {
  return {
    atLeast (expected): void {
      report(assertObjectIsAtLeastObject(actual, expected));
    },
    atMost (expected): void {
      report(assertObjectIsAtMostObject(actual, expected));
    },
    instanceOf (expected): void {
      report(assertObjectIsInstanceOfClass(actual, expected));
    },
    empty (): void {
      report(assertObjectIsEmpty(actual));
    }
  };
};

const getNegatedAssertionsForObject = function (actual: object): ObjectAssertions {
  return {
    atLeast (expected): void {
      report(assertObjectIsNotAtLeastObject(actual, expected));
    },
    atMost (expected): void {
      report(assertObjectIsNotAtMostObject(actual, expected));
    },
    instanceOf (expected): void {
      report(assertObjectIsNotInstanceOfClass(actual, expected));
    },
    empty (): void {
      report(assertObjectIsNotEmpty(actual));
    }
  };
};

export {
  getAssertionsForObject,
  getNegatedAssertionsForObject
};
