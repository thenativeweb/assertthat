import { isStringContainingAllOfStringIterable } from './assertions/forStrings/isStringContainingAllOfStringIterable';
import { isStringContainingAnyOfStringIterable } from './assertions/forStrings/isStringContainingAnyOfStringIterable';
import { isStringContainingString } from './assertions/forStrings/isStringContainingString';
import { isStringEmpty } from './assertions/forStrings/isStringEmpty';
import { isStringEndingWithString } from './assertions/forStrings/isStringEndingWithString';
import { isStringEqualToString } from './assertions/forStrings/isStringEqualToString';
import { isStringFalsy } from './assertions/forStrings/isStringFalsy';
import { isStringMatchingRegExp } from './assertions/forStrings/isStringMatchingRegExp';
import { isStringNotContainingAllOfStringIterable } from './assertions/forStrings/isStringNotContainingAllOfStringIterable';
import { isStringNotContainingAnyOfStringIterable } from './assertions/forStrings/isStringNotContainingAnyOfStringIterable';
import { isStringNotContainingString } from './assertions/forStrings/isStringNotContainingString';
import { isStringNotEmpty } from './assertions/forStrings/isStringNotEmpty';
import { isStringNotEndingWithString } from './assertions/forStrings/isStringNotEndingWith';
import { isStringNotEqualToString } from './assertions/forStrings/isStringNotEqualToString';
import { isStringNotFalsy } from './assertions/forStrings/isStringNotFalsy';
import { isStringNotMatchingRegExp } from './assertions/forStrings/isStringNotMatchingRegExp';
import { isStringNotSameAsString } from './assertions/forStrings/isStringNotSameAsString';
import { isStringNotSameJsonAsString } from './assertions/forStrings/isStringNotSameJsonAsString';
import { isStringNotStartingWithString } from './assertions/forStrings/isStringNotStartingWithString';
import { isStringNotTruthy } from './assertions/forStrings/isStringNotTruthy';
import { isStringSameAsString } from './assertions/forStrings/isStringSameAsString';
import { isStringSameJsonAsString } from './assertions/forStrings/isStringSameJsonAsString';
import { isStringStartingWithString } from './assertions/forStrings/isStringStartingWithString';
import { isStringTruthy } from './assertions/forStrings/isStringTruthy';
import { report } from './report';

type AssertthatForString = (actual: string) => {
  is: {
    equalTo: (expected: string) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: string) => void;
    sameJsonAs: (expected: string) => void;

    containing: (expected: string) => void;
    startingWith: (expected: string) => void;
    endingWith: (expected: string) => void;
    containingAnyOf: (expected: Iterable<string>) => void;
    containingAllOf: (expected: Iterable<string>) => void;
    matching: (expected: RegExp) => void;
    empty: () => void;

    not: {
      equalTo: (expected: string) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: string) => void;
      sameJsonAs: (expected: string) => void;

      containing: (expected: string) => void;
      startingWith: (expected: string) => void;
      endingWith: (expected: string) => void;
      containingAnyOf: (expected: Iterable<string>) => void;
      containingAllOf: (expected: Iterable<string>) => void;
      matching: (expected: RegExp) => void;
      empty: () => void;
    };
  };
};

const assertthatForString = function (actual: string): ReturnType<AssertthatForString> {
  return {
    is: {
      equalTo (expected: string): void {
        report(isStringEqualToString(actual, expected));
      },
      falsy (): void {
        report(isStringFalsy(actual));
      },
      truthy (): void {
        report(isStringTruthy(actual));
      },
      sameAs (expected: string): void {
        report(isStringSameAsString(actual, expected));
      },
      sameJsonAs (expected: string): void {
        report(isStringSameJsonAsString(actual, expected));
      },

      containing (expected: string): void {
        report(isStringContainingString(actual, expected));
      },
      startingWith (expected: string): void {
        report(isStringStartingWithString(actual, expected));
      },
      endingWith (expected: string): void {
        report(isStringEndingWithString(actual, expected));
      },
      containingAnyOf (expected: Iterable<string>): void {
        report(isStringContainingAnyOfStringIterable(actual, expected));
      },
      containingAllOf (expected: Iterable<string>): void {
        report(isStringContainingAllOfStringIterable(actual, expected));
      },
      matching (expected: RegExp): void {
        report(isStringMatchingRegExp(actual, expected));
      },
      empty (): void {
        report(isStringEmpty(actual));
      },

      not: {
        equalTo (expected: string): void {
          report(isStringNotEqualToString(actual, expected));
        },
        falsy (): void {
          report(isStringNotFalsy(actual));
        },
        truthy (): void {
          report(isStringNotTruthy(actual));
        },
        sameAs (expected: string): void {
          report(isStringNotSameAsString(actual, expected));
        },
        sameJsonAs (expected: string): void {
          report(isStringNotSameJsonAsString(actual, expected));
        },

        containing (expected: string): void {
          report(isStringNotContainingString(actual, expected));
        },
        startingWith (expected: string): void {
          report(isStringNotStartingWithString(actual, expected));
        },
        endingWith (expected: string): void {
          report(isStringNotEndingWithString(actual, expected));
        },
        containingAnyOf (expected: Iterable<string>): void {
          report(isStringNotContainingAnyOfStringIterable(actual, expected));
        },
        containingAllOf (expected: Iterable<string>): void {
          report(isStringNotContainingAllOfStringIterable(actual, expected));
        },
        matching (expected: RegExp): void {
          report(isStringNotMatchingRegExp(actual, expected));
        },
        empty (): void {
          report(isStringNotEmpty(actual));
        }
      }
    }
  };
};

export type {
  AssertthatForString
};

export {
  assertthatForString
};
