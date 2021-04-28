import { assertNumberIsAtLeastNumber } from './assertNumberIsAtLeastNumber';
import { assertNumberIsAtMostNumber } from './assertNumberIsAtMostNumber';
import { assertNumberIsGreaterThanNumber } from './assertNumberIsGreaterThanNumber';
import { assertNumberIsLessThanNumber } from './assertNumberIsLessThanNumber';
import { assertNumberIsNaN } from './assertNumberIsNaN';
import { assertNumberIsNotAtLeastNumber } from './assertNumberIsNotAtLeastNumber';
import { assertNumberIsNotAtMostNumber } from './assertNumberIsNotAtMostNumber';
import { assertNumberIsNotGreaterThanNumber } from './assertNumberIsNotGreaterThanNumber';
import { assertNumberIsNotLessThanNumber } from './assertNumberIsNotLessThanNumber';
import { assertNumberIsNotNaN } from './assertNumberIsNotNaN';
import { NumberAssertions } from './NumberAssertions';
import { report } from '../../report';

const getAssertionsForNumber = function (actual: number): NumberAssertions {
  return {
    greaterThan (expected): void {
      report(assertNumberIsGreaterThanNumber(actual, expected));
    },
    lessThan (expected): void {
      report(assertNumberIsLessThanNumber(actual, expected));
    },
    atLeast (expected): void {
      report(assertNumberIsAtLeastNumber(actual, expected));
    },
    atMost (expected): void {
      report(assertNumberIsAtMostNumber(actual, expected));
    },
    NaN (): void {
      report(assertNumberIsNaN(actual));
    }
  };
};

const getNegatedAssertionsForNumber = function (actual: number): NumberAssertions {
  return {
    greaterThan (expected): void {
      report(assertNumberIsNotGreaterThanNumber(actual, expected));
    },
    lessThan (expected): void {
      report(assertNumberIsNotLessThanNumber(actual, expected));
    },
    atLeast (expected): void {
      report(assertNumberIsNotAtLeastNumber(actual, expected));
    },
    atMost (expected): void {
      report(assertNumberIsNotAtMostNumber(actual, expected));
    },
    NaN (): void {
      report(assertNumberIsNotNaN(actual));
    }
  };
};

export {
  getAssertionsForNumber,
  getNegatedAssertionsForNumber
};
