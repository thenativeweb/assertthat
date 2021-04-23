import { assertActualIsEqualToExpected } from './assertActualIsEqualToExpected';
import { assertActualIsFalsy } from './assertActualIsFalsy';
import { assertActualIsIdenticalToExpected } from './assertActualIsIdenticalToExpected';
import { assertActualIsNotEqualToExpected } from './assertActualIsNotEqualToExpected';
import { assertActualIsNotFalsy } from './assertActualIsNotFalsy';
import { assertActualIsNotIdenticalToExpected } from './assertActualIsNotIdenticalToExpected';
import { assertActualIsNotNull } from './assertActualIsNotNull';
import { assertActualIsNotSameJsonAsExpected } from './assertActualIsNotSameJsonAsExpected';
import { assertActualIsNotTruthy } from './assertActualIsNotTruthy';
import { assertActualIsNotUndefined } from './assertActualIsNotUndefined';
import { assertActualIsNull } from './assertActualIsNull';
import { assertActualIsSameJsonAsExpected } from './assertActualIsSameJsonAsExpected';
import { assertActualIsTruthy } from './assertActualIsTruthy';
import { assertActualIsUndefined } from './assertActualIsUndefined';
import { CommonAssertions } from './CommonAssertions';
import { report } from '../../report';

const getAssertionsForAny = function <TAny>(actual: TAny): CommonAssertions<TAny> {
  return {
    equalTo (expected: TAny): void {
      report(assertActualIsEqualToExpected(actual, expected));
    },
    identicalTo (expected: TAny): void {
      report(assertActualIsIdenticalToExpected(actual, expected));
    },
    sameJsonAs (expected: TAny): void {
      report(assertActualIsSameJsonAsExpected(actual, expected));
    },

    falsy (): void {
      report(assertActualIsFalsy(actual));
    },
    truthy (): void {
      report(assertActualIsTruthy(actual));
    },

    null (): void {
      report(assertActualIsNull(actual));
    },
    undefined (): void {
      report(assertActualIsUndefined(actual));
    }
  };
};

const getNegatedAssertionsForAny = function <TAny>(actual: TAny): CommonAssertions<TAny> {
  return {
    equalTo (expected: TAny): void {
      report(assertActualIsNotEqualToExpected(actual, expected));
    },
    identicalTo (expected: TAny): void {
      report(assertActualIsNotIdenticalToExpected(actual, expected));
    },
    sameJsonAs (expected: TAny): void {
      report(assertActualIsNotSameJsonAsExpected(actual, expected));
    },

    falsy (): void {
      report(assertActualIsNotFalsy(actual));
    },
    truthy (): void {
      report(assertActualIsNotTruthy(actual));
    },

    null (): void {
      report(assertActualIsNotNull(actual));
    },
    undefined (): void {
      report(assertActualIsNotUndefined(actual));
    }
  };
};

export {
  getAssertionsForAny,
  getNegatedAssertionsForAny
};
