import { atLeast } from './constraints/atLeast';
import { atMost } from './constraints/atMost';
import { between } from './constraints/between';
import { containing } from './constraints/containing';
import { containingAllOf } from './constraints/containingAllOf';
import { containingAnyOf } from './constraints/containingAnyOf';
import { endingWith } from './constraints/endingWith';
import { equalTo } from './constraints/equalTo';
import { falsy } from './constraints/falsy';
import { greaterThan } from './constraints/greaterThan';
import { instanceOf } from './constraints/instanceOf';
import { isFalse } from './constraints/false';
import { isNan } from './constraints/nan';
import { isNull } from './constraints/null';
import { isTrue } from './constraints/true';
import { isUndefined } from './constraints/undefined';
import { lessThan } from './constraints/lessThan';
import { matching } from './constraints/matching';
import { ofType } from './constraints/ofType';
import { sameAs } from './constraints/sameAs';
import { sameJsonAs } from './constraints/sameJsonAs';
import { startingWith } from './constraints/startingWith';
import { throwing } from './constraints/throwing';
import { throwingAsync } from './constraints/throwingAsync';

const assert = {
  that (actual: any): {
    is: {
      atLeast: (expected: number | [] | {}) => void;
      atMost: (expected: number | [] | {}) => void;
      between: (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void;
      containing: (expected: any) => void;
      containingAnyOf: (expected: any[]) => void;
      containingAllOf: (expected: any[]) => void;
      endingWith: (expected: string) => void;
      equalTo: (expected: any) => void;
      false: () => void;
      falsy: () => void;
      greaterThan: (expected: number | [] | {}) => void;
      instanceOf: (expected: new(...args: any[]) => {}) => void;
      lessThan: (expected: number | [] | {}) => void;
      matching: (expected: RegExp) => void;
      NaN: () => void;
      null: () => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
      startingWith: (expected: string) => void;
      throwing: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => void;
      throwingAsync: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => Promise<void>;
      true: () => void;
      undefined: () => void;

      not: {
        atLeast: (expected: number | [] | {}) => void;
        atMost: (expected: number | [] | {}) => void;
        between: (expectedLower: number | [] | {}, expectedUpper: number | string | [] | {}) => void;
        containing: (expected: any) => void;
        containingAnyOf: (expected: any[]) => void;
        containingAllOf: (expected: any[]) => void;
        endingWith: (expected: string) => void;
        equalTo: (expected: any) => void;
        false: () => void;
        falsy: () => void;
        greaterThan: (expected: number | [] | {}) => void;
        instanceOf: (expected: new(...args: any[]) => {}) => void;
        lessThan: (expected: number | [] | {}) => void;
        matching: (expected: RegExp) => void;
        NaN: () => void;
        null: () => void;
        ofType: (expected: string) => void;
        sameAs: (expected: any) => void;
        sameJsonAs: (expected: any) => void;
        startingWith: (expected: string) => void;
        throwing: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => void;
        throwingAsync: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => Promise<void>;
        true: () => void;
        undefined: () => void;
      };
    };
  } {
    const is = {
      atLeast: atLeast(actual),
      atMost: atMost(actual),
      between: between(actual),
      containing: containing(actual),
      containingAnyOf: containingAnyOf(actual),
      containingAllOf: containingAllOf(actual),
      endingWith: endingWith(actual),
      equalTo: equalTo(actual),
      false: isFalse(actual),
      falsy: falsy(actual),
      greaterThan: greaterThan(actual),
      instanceOf: instanceOf(actual),
      lessThan: lessThan(actual),
      matching: matching(actual),
      NaN: isNan(actual),
      null: isNull(actual),
      ofType: ofType(actual),
      sameAs: sameAs(actual),
      sameJsonAs: sameJsonAs(actual),
      startingWith: startingWith(actual),
      throwing <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): void {
        throwing<TError>(actual)(expected);
      },
      async throwingAsync <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): Promise<void> {
        await throwingAsync<TError>(actual)(expected);
      },
      true: isTrue(actual),
      undefined: isUndefined(actual),

      not: {
        atLeast: atLeast.negated(actual),
        atMost: atMost.negated(actual),
        between: between.negated(actual),
        containing: containing.negated(actual),
        containingAnyOf: containingAnyOf.negated(actual),
        containingAllOf: containingAllOf.negated(actual),
        endingWith: endingWith.negated(actual),
        equalTo: equalTo.negated(actual),
        false: isFalse.negated(actual),
        falsy: falsy.negated(actual),
        greaterThan: greaterThan.negated(actual),
        instanceOf: instanceOf.negated(actual),
        lessThan: lessThan.negated(actual),
        matching: matching.negated(actual),
        NaN: isNan.negated(actual),
        null: isNull.negated(actual),
        ofType: ofType.negated(actual),
        sameAs: sameAs.negated(actual),
        sameJsonAs: sameJsonAs.negated(actual),
        startingWith: startingWith.negated(actual),
        throwing <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): void {
          throwing.negated<TError>(actual)(expected);
        },
        async throwingAsync <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)): Promise<void> {
          await throwingAsync.negated<TError>(actual)(expected);
        },
        true: isTrue.negated(actual),
        undefined: isUndefined.negated(actual)
      }
    };

    return { is };
  }
};

export { assert };
