import { isNumberAtLeastNumber } from './assertions/forNumbers/isNumberAtLeastNumber';
import { isNumberAtMostNumber } from './assertions/forNumbers/isNumberAtMostNumber';
import { isNumberEqualToNumber } from './assertions/forNumbers/isNumberEqualToNumber';
import { isNumberFalsy } from './assertions/forNumbers/isNumberFalsy';
import { isNumberGreaterThanNumber } from './assertions/forNumbers/isNumberGreaterThanNumber';
import { isNumberLessThanNumber } from './assertions/forNumbers/isNumberLessThanNumber';
import { isNumberNan } from './assertions/forNumbers/isNumberNan';
import { isNumberNotAtLeastNumber } from './assertions/forNumbers/isNumberNotAtLeastNumber';
import { isNumberNotAtMostNumber } from './assertions/forNumbers/isNumberNotAtMostNumber';
import { isNumberNotEqualToNumber } from './assertions/forNumbers/isNumberNotEqualToNumber';
import { isNumberNotFalsy } from './assertions/forNumbers/isNumberNotFalsy';
import { isNumberNotGreaterThanNumber } from './assertions/forNumbers/isNumberNotGreaterThanNumber';
import { isNumberNotLessThanNumber } from './assertions/forNumbers/isNumberNotLessThanNumber';
import { isNumberNotNan } from './assertions/forNumbers/isNumberNotNan';
import { isNumberNotSameAsNumber } from './assertions/forNumbers/isNumberNotSameAsNumber';
import { isNumberNotSameJsonAsNumber } from './assertions/forNumbers/isNumberNotSameJsonAsNumber';
import { isNumberNotTruthy } from './assertions/forNumbers/isNumberNotTruthy';
import { isNumberSameAsNumber } from './assertions/forNumbers/isNumberSameAsNumber';
import { isNumberSameJsonAsNumber } from './assertions/forNumbers/isNumberSameJsonAsNumber';
import { isNumberTruthy } from './assertions/forNumbers/isNumberTruthy';
import { report } from './report';

type AssertthatForNumber = (actual: number) => {
  is: {
    equalTo: (expected: number) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: number) => void;
    sameJsonAs: (expected: number) => void;

    greaterThan: (expected: number) => void;
    lessThan: (expected: number) => void;
    atLeast: (expected: number) => void;
    atMost: (expected: number) => void;
    nan: () => void;

    not: {
      equalTo: (expected: number) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: number) => void;
      sameJsonAs: (expected: number) => void;

      greaterThan: (expected: number) => void;
      lessThan: (expected: number) => void;
      atLeast: (expected: number) => void;
      atMost: (expected: number) => void;
      nan: () => void;
    };
  };
};

const assertthatForNumber = function (actual: number): ReturnType<AssertthatForNumber> {
  return {
    is: {
      equalTo (expected: number): void {
        report(isNumberEqualToNumber(actual, expected));
      },
      falsy (): void {
        report(isNumberFalsy(actual));
      },
      truthy (): void {
        report(isNumberTruthy(actual));
      },
      sameAs (expected: number): void {
        report(isNumberSameAsNumber(actual, expected));
      },
      sameJsonAs (expected: number): void {
        report(isNumberSameJsonAsNumber(actual, expected));
      },

      greaterThan (expected: number): void {
        report(isNumberGreaterThanNumber(actual, expected));
      },
      lessThan (expected: number): void {
        report(isNumberLessThanNumber(actual, expected));
      },
      atLeast (expected: number): void {
        report(isNumberAtLeastNumber(actual, expected));
      },
      atMost (expected: number): void {
        report(isNumberAtMostNumber(actual, expected));
      },
      nan (): void {
        report(isNumberNan(actual));
      },

      not: {
        equalTo (expected: number): void {
          report(isNumberNotEqualToNumber(actual, expected));
        },
        falsy (): void {
          report(isNumberNotFalsy(actual));
        },
        truthy (): void {
          report(isNumberNotTruthy(actual));
        },
        sameAs (expected: number): void {
          report(isNumberNotSameAsNumber(actual, expected));
        },
        sameJsonAs (expected: number): void {
          report(isNumberNotSameJsonAsNumber(actual, expected));
        },

        greaterThan (expected: number): void {
          report(isNumberNotGreaterThanNumber(actual, expected));
        },
        lessThan (expected: number): void {
          report(isNumberNotLessThanNumber(actual, expected));
        },
        atLeast (expected: number): void {
          report(isNumberNotAtLeastNumber(actual, expected));
        },
        atMost (expected: number): void {
          report(isNumberNotAtMostNumber(actual, expected));
        },
        nan (): void {
          report(isNumberNotNan(actual));
        }
      }
    }
  };
};

export type {
  AssertthatForNumber
};

export {
  assertthatForNumber
};
