import { isBooleanEqualToBoolean } from './assertions/forBooleans/isBooleanEqualToBoolean';
import { isBooleanFalse } from './assertions/forBooleans/isBooleanFalse';
import { isBooleanFalsy } from './assertions/forBooleans/isBooleanFalsy';
import { isBooleanNotEqualToBoolean } from './assertions/forBooleans/isBooleanNotEqualToBoolean';
import { isBooleanNotFalse } from './assertions/forBooleans/isBooleanNotFalse';
import { isBooleanNotFalsy } from './assertions/forBooleans/isBooleanNotFalsy';
import { isBooleanNotSameAsBoolean } from './assertions/forBooleans/isBooleanNotSameAsBoolean';
import { isBooleanNotSameJsonAsBoolean } from './assertions/forBooleans/isBooleanNotSameJsonAsBoolean';
import { isBooleanNotTrue } from './assertions/forBooleans/isBooleanNotTrue';
import { isBooleanNotTruthy } from './assertions/forBooleans/isBooleanNotTruthy';
import { isBooleanSameAsBoolean } from './assertions/forBooleans/isBooleanSameAsBoolean';
import { isBooleanSameJsonAsBoolean } from './assertions/forBooleans/isBooleanSameJsonAsBoolean';
import { isBooleanTrue } from './assertions/forBooleans/isBooleanTrue';
import { isBooleanTruthy } from './assertions/forBooleans/isBooleanTruthy';
import { report } from './report';

type AssertthatForBoolean = (actual: boolean) => {
  is: {
    equalTo: (expected: boolean) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: boolean) => void;
    sameJsonAs: (expected: boolean) => void;

    true: () => void;
    false: () => void;

    not: {
      equalTo: (expected: boolean) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: boolean) => void;
      sameJsonAs: (expected: boolean) => void;

      true: () => void;
      false: () => void;
    };
  };
};

const assertthatForBoolean = function (actual: boolean): ReturnType<AssertthatForBoolean> {
  return {
    is: {
      equalTo (expected: boolean): void {
        report(isBooleanEqualToBoolean(actual, expected));
      },
      falsy (): void {
        report(isBooleanFalsy(actual));
      },
      truthy (): void {
        report(isBooleanTruthy(actual));
      },
      sameAs (expected: boolean): void {
        report(isBooleanSameAsBoolean(actual, expected));
      },
      sameJsonAs (expected: boolean): void {
        report(isBooleanSameJsonAsBoolean(actual, expected));
      },

      true (): void {
        report(isBooleanTrue(actual));
      },
      false (): void {
        report(isBooleanFalse(actual));
      },

      not: {
        equalTo (expected: boolean): void {
          report(isBooleanNotEqualToBoolean(actual, expected));
        },
        falsy (): void {
          report(isBooleanNotFalsy(actual));
        },
        truthy (): void {
          report(isBooleanNotTruthy(actual));
        },
        sameAs (expected: boolean): void {
          report(isBooleanNotSameAsBoolean(actual, expected));
        },
        sameJsonAs (expected: boolean): void {
          report(isBooleanNotSameJsonAsBoolean(actual, expected));
        },

        true (): void {
          report(isBooleanNotTrue(actual));
        },
        false (): void {
          report(isBooleanNotFalse(actual));
        }
      }
    }
  };
};

export type {
  AssertthatForBoolean
};

export {
  assertthatForBoolean
};
