import { assertActualIsEqualToExpected } from './assertActualIsEqualToExpected';
import { assertActualIsFalse } from './assertActualIsFalse';
import { assertActualIsFalsy } from './assertActualIsFalsy';
import { assertActualIsIdenticalToExpected } from './assertActualIsIdenticalToExpected';
import { assertActualIsNotEqualToExpected } from './assertActualIsNotEqualToExpected';
import { assertActualIsNotFalse } from './assertActualIsNotFalse';
import { assertActualIsNotFalsy } from './assertActualIsNotFalsy';
import { assertActualIsNotIdenticalToExpected } from './assertActualIsNotIdenticalToExpected';
import { assertActualIsNotNull } from './assertActualIsNotNull';
import { assertActualIsNotOfType } from './assertActualIsNotOfType';
import { assertActualIsNotSameJsonAsExpected } from './assertActualIsNotSameJsonAsExpected';
import { assertActualIsNotTrue } from './assertActualIsNotTrue';
import { assertActualIsNotTruthy } from './assertActualIsNotTruthy';
import { assertActualIsNotUndefined } from './assertActualIsNotUndefined';
import { assertActualIsNull } from './assertActualIsNull';
import { assertActualIsOfType } from './assertActualIsOfType';
import { assertActualIsSameJsonAsExpected } from './assertActualIsSameJsonAsExpected';
import { assertActualIsTrue } from './assertActualIsTrue';
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
    },
    false (): void {
      report(assertActualIsFalse(actual));
    },
    true (): void {
      report(assertActualIsTrue(actual));
    },

    ofType (expected): void {
      report(assertActualIsOfType(actual, expected));
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
    },
    false (): void {
      report(assertActualIsNotFalse(actual));
    },
    true (): void {
      report(assertActualIsNotTrue(actual));
    },

    ofType (expected): void {
      report(assertActualIsNotOfType(actual, expected));
    }
  };
};

export {
  getAssertionsForAny,
  getNegatedAssertionsForAny
};
