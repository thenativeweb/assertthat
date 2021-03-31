import { AssertionFailed } from './errors';
import { isFunctionEqualToFunction } from './assertionsForFunction/isFunctionEqualToFunction';
import { isFunctionSameAsFunction } from './assertionsForFunction/isFunctionSameAsFunction';
import { isFunctionThrowing } from './assertionsForFunction/isFunctionThrowing';
import { report } from './report';
import { error, Result, value } from 'defekt';
import { isFunctionNotEqualToFunction } from './assertionsForFunction/isFunctionNotEqualToFunction';
import { isFunctionNotSameAsFunction } from './assertionsForFunction/isFunctionNotSameAsFunction';
import { isFunctionNotThrowing } from './assertionsForFunction/isFunctionNotThrowing';

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

        },
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
