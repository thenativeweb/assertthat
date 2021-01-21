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

function that (actual: number): {
  is: {
    atLeast: (expected: number | [] | Record<string, unknown>) => void;
    atMost: (expected: number | [] | Record<string, unknown>) => void;
    between: (expectedLower: number | [] | Record<string, unknown>, expectedUpper: number | [] | Record<string, unknown>) => void;
    equalTo: (expected: any) => void;
    falsy: () => void;
    greaterThan: (expected: number | [] | Record<string, unknown>) => void;
    lessThan: (expected: number | [] | Record<string, unknown>) => void;
    NaN: () => void;
    ofType: (expected: string) => void;
    sameAs: (expected: any) => void;
    sameJsonAs: (expected: any) => void;

    not: {
      atLeast: (expected: number | [] | Record<string, unknown>) => void;
      atMost: (expected: number | [] | Record<string, unknown>) => void;
      between: (expectedLower: number | [] | Record<string, unknown>, expectedUpper: number | [] | Record<string, unknown>) => void;
      equalTo: (expected: any) => void;
      falsy: () => void;
      greaterThan: (expected: number | [] | Record<string, unknown>) => void;
      lessThan: (expected: number | [] | Record<string, unknown>) => void;
      NaN: () => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
    };
  };
};
// eslint-disable-next-line @typescript-eslint/unified-signatures,no-redeclare
function that (actual: string): {
  is: {
    containing: (expected: any) => void;
    containingAnyOf: (expected: any[]) => void;
    containingAllOf: (expected: any[]) => void;
    endingWith: (expected: string) => void;
    equalTo: (expected: any) => void;
    falsy: () => void;
    matching: (expected: RegExp) => void;
    ofType: (expected: string) => void;
    sameAs: (expected: any) => void;
    sameJsonAs: (expected: any) => void;
    startingWith: (expected: string) => void;

    not: {
      containing: (expected: any) => void;
      containingAnyOf: (expected: any[]) => void;
      containingAllOf: (expected: any[]) => void;
      endingWith: (expected: string) => void;
      equalTo: (expected: any) => void;
      falsy: () => void;
      matching: (expected: RegExp) => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
      startingWith: (expected: string) => void;
    };
  };
};
// eslint-disable-next-line @typescript-eslint/unified-signatures,no-redeclare
function that (actual: boolean): {
  is: {
    equalTo: (expected: any) => void;
    false: () => void;
    falsy: () => void;
    instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
    ofType: (expected: string) => void;
    sameAs: (expected: any) => void;
    sameJsonAs: (expected: any) => void;
    true: () => void;

    not: {
      equalTo: (expected: any) => void;
      false: () => void;
      falsy: () => void;
      instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
      true: () => void;
    };
  };
};
// eslint-disable-next-line @typescript-eslint/unified-signatures,no-redeclare
function that (actual: any[]): {
  is: {
    containing: (expected: any) => void;
    containingAnyOf: (expected: any[]) => void;
    containingAllOf: (expected: any[]) => void;
    equalTo: (expected: any) => void;
    falsy: () => void;
    ofType: (expected: string) => void;
    sameAs: (expected: any) => void;
    sameJsonAs: (expected: any) => void;

    not: {
      containing: (expected: any) => void;
      containingAnyOf: (expected: any[]) => void;
      containingAllOf: (expected: any[]) => void;
      equalTo: (expected: any) => void;
      falsy: () => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
    };
  };
};
// eslint-disable-next-line @typescript-eslint/unified-signatures,no-redeclare
function that (actual: object): {
  is: {
    equalTo: (expected: any) => void;
    falsy: () => void;
    instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
    null: () => void;
    ofType: (expected: string) => void;
    sameAs: (expected: any) => void;
    sameJsonAs: (expected: any) => void;

    not: {
      equalTo: (expected: any) => void;
      falsy: () => void;
      instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
      null: () => void;
      ofType: (expected: string) => void;
      sameAs: (expected: any) => void;
      sameJsonAs: (expected: any) => void;
    };
  };
};
// eslint-disable-next-line @typescript-eslint/unified-signatures,no-redeclare
function that (actual: any): {
  is: {
    atLeast: (expected: number | [] | Record<string, unknown>) => void;
    atMost: (expected: number | [] | Record<string, unknown>) => void;
    between: (expectedLower: number | [] | Record<string, unknown>, expectedUpper: number | [] | Record<string, unknown>) => void;
    containing: (expected: any) => void;
    containingAnyOf: (expected: any[]) => void;
    containingAllOf: (expected: any[]) => void;
    endingWith: (expected: string) => void;
    equalTo: (expected: any) => void;
    false: () => void;
    falsy: () => void;
    greaterThan: (expected: number | [] | Record<string, unknown>) => void;
    instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
    lessThan: (expected: number | [] | Record<string, unknown>) => void;
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
      atLeast: (expected: number | [] | Record<string, unknown>) => void;
      atMost: (expected: number | [] | Record<string, unknown>) => void;
      between: (expectedLower: number | [] | Record<string, unknown>, expectedUpper: number | [] | Record<string, unknown>) => void;
      containing: (expected: any) => void;
      containingAnyOf: (expected: any[]) => void;
      containingAllOf: (expected: any[]) => void;
      endingWith: (expected: string) => void;
      equalTo: (expected: any) => void;
      false: () => void;
      falsy: () => void;
      greaterThan: (expected: number | [] | Record<string, unknown>) => void;
      instanceOf: (expected: new(...args: any[]) => Record<string, unknown>) => void;
      lessThan: (expected: number | [] | Record<string, unknown>) => void;
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
};

// eslint-disable-next-line func-style,no-redeclare
function that (actual: any): any {
  return {
    is: {
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
    }
  };
}

const assert = {
  that
};

export { assert };
