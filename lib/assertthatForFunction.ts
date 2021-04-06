import { isFunctionEqualToFunction } from './assertions/forFunctions/isFunctionEqualToFunction';
import { isFunctionNotEqualToFunction } from './assertions/forFunctions/isFunctionNotEqualToFunction';
import { isFunctionNotSameAsFunction } from './assertions/forFunctions/isFunctionNotSameAsFunction';
import { isFunctionNotThrowing } from './assertions/forFunctions/isFunctionNotThrowing';
import { isFunctionNotThrowingAsync } from './assertions/forFunctions/isFunctionNotThrowingAsync';
import { isFunctionSameAsFunction } from './assertions/forFunctions/isFunctionSameAsFunction';
import { isFunctionThrowing } from './assertions/forFunctions/isFunctionThrowing';
import { isFunctionThrowingAsync } from './assertions/forFunctions/isFunctionThrowingAsync';
import { report } from './report';

/* eslint-disable @typescript-eslint/ban-types */
type AssertthatForFunction = (actual: Function) => {
  is: {
    equalTo: (expected: Function) => void;
    sameAs: (expected: Function) => void;

    throwing: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => void;
    throwingAsync: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => Promise<void>;

    not: {
      equalTo: (expected: Function) => void;
      sameAs: (expected: Function) => void;

      throwing: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => void;
      throwingAsync: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => Promise<void>;
    };
  };
};

const assertthatForFunction = function (actual: Function): ReturnType<AssertthatForFunction> {
  return {
    is: {
      equalTo (expected: Function): void {
        report(isFunctionEqualToFunction(actual, expected));
      },
      sameAs (expected: Function): void {
        report(isFunctionSameAsFunction(actual, expected));
      },
      throwing <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): void {
        report(isFunctionThrowing(actual, expected));
      },
      async throwingAsync <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): Promise<void> {
        report(await isFunctionThrowingAsync(actual, expected));
      },

      not: {
        equalTo (expected: Function): void {
          report(isFunctionNotEqualToFunction(actual, expected));
        },
        sameAs (expected: Function): void {
          report(isFunctionNotSameAsFunction(actual, expected));
        },
        throwing <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): void {
          report(isFunctionNotThrowing(actual, expected));
        },
        async throwingAsync <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): Promise<void> {
          report(await isFunctionNotThrowingAsync(actual, expected));
        }
      }
    }
  };
};
/* eslint-enable @typescript-eslint/ban-types */

export type {
  AssertthatForFunction
};

export {
  assertthatForFunction
};
