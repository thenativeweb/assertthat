import { assertActualIsEqualToExpected } from './assertActualIsEqualToExpected';
import { CommonAssertions } from './CommonAssertions';
import { report } from '../../report';

const getAssertionsForAny = function <TAny>(actual: TAny): CommonAssertions<TAny> {
  return {
    equalTo (expected: TAny): void {
      report(assertActualIsEqualToExpected(actual, expected));
    },
    identicalTo (expected: TAny): void {
      //report(assertActualIsIdenticalToExpected(actual, expected));
    },
    sameJsonAs (expected: TAny): void {
      //report(assertActualIsSameJsonAsExpected(actual, expected));
    },
    falsy (): void {
      //report(assertActualIsFalsy(actual));
    },
    truthy (): void {
      //report(assertActualIsTruthy(actual));
    }
  };
};

const getNegatedAssertionsForAny = function <TAny>(actual: TAny): CommonAssertions<TAny> {
  return {
    equalTo (expected: TAny): void {
      //report(assertActualIsNotEqualToExpected(actual, expected));
    },
    identicalTo (expected: TAny): void {
      //report(assertActualIsNotIdenticalToExpected(actual, expected));
    },
    sameJsonAs (expected: TAny): void {
      //report(assertActualIsNotSameJsonAsExpected(actual, expected));
    },
    falsy (): void {
      //report(assertActualIsNotFalsy(actual));
    },
    truthy (): void {
      //report(assertActualIsNotTruthy(actual));
    }
  };
};

export {
  getAssertionsForAny,
  getNegatedAssertionsForAny
};
