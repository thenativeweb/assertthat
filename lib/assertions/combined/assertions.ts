import { assertActualIsAnError } from './assertActualIsAnError';
import { assertActualIsAnErrorWithMessage } from './assertActualIsAnErrorWithMessage';
import { assertActualIsAtLeast } from './assertActualIsAtLeast';
import { assertActualIsAtMost } from './assertActualIsAtMost';
import { assertActualIsAValue } from './assertActualIsAValue';
import { assertActualIsContaining } from './assertActualIsContaining';
import { assertActualIsContainingAllOf } from './assertActualIsContainingAllOf';
import { assertActualIsContainingAnyOf } from './assertActualIsContainingAnyOf';
import { assertActualIsEmpty } from './assertActualIsEmpty';
import { assertActualIsEndingWithActual } from './assertActualIsEndingWith';
import { assertActualIsEqualTo } from './assertActualIsEqualTo';
import { assertActualIsFalse } from './assertActualIsFalse';
import { assertActualIsFalsy } from './assertActualIsFalsy';
import { assertActualIsGreaterThan } from './assertActualIsGreaterThan';
import { assertActualIsIdenticalTo } from './assertActualIsIdenticalTo';
import { assertActualIsInstanceOf } from './assertActualIsInstanceOf';
import { assertActualIsLessThan } from './assertActualIsLessThan';
import { assertActualIsMatching } from './assertActualIsMatching';
import { assertActualIsNaN } from './assertActualIsNaN';
import { assertActualIsNotAnError } from './negated/assertActualIsNotAnError';
import { assertActualIsNotAnErrorWithMessage } from './negated/assertActualIsNotAnErrorWithMessage';
import { assertActualIsNotAtLeast } from './negated/assertActualIsNotAtLeast';
import { assertActualIsNotAtMost } from './negated/assertActualIsNotAtMost';
import { assertActualIsNotAValue } from './negated/assertActualIsNotAValue';
import { assertActualIsNotContaining } from './negated/assertActualIsNotContaining';
import { assertActualIsNotContainingAllOf } from './negated/assertActualIsNotContainingAllOf';
import { assertActualIsNotContainingAnyOf } from './negated/assertActualIsNotContainingAnyOf';
import { assertActualIsNotEmpty } from './negated/assertActualIsNotEmpty';
import { assertActualIsNotEndingWithActual } from './negated/assertActualIsNotEndingWith';
import { assertActualIsNotEqualTo } from './negated/assertActualIsNotEqualTo';
import { assertActualIsNotFalse } from './negated/assertActualIsNotFalse';
import { assertActualIsNotFalsy } from './negated/assertActualIsNotFalsy';
import { assertActualIsNotGreaterThan } from './negated/assertActualIsNotGreaterThan';
import { assertActualIsNotIdenticalTo } from './negated/assertActualIsNotIdenticalTo';
import { assertActualIsNotInstanceOf } from './negated/assertActualIsNotInstanceOf';
import { assertActualIsNotLessThan } from './negated/assertActualIsNotLessThan';
import { assertActualIsNotMatching } from './negated/assertActualIsNotMatching';
import { assertActualIsNotNaN } from './negated/assertActualIsNotNaN';
import { assertActualIsNotNull } from './negated/assertActualIsNotNull';
import { assertActualIsNotOfType } from './negated/assertActualIsNotOfType';
import { assertActualIsNotSameJsonAs } from './negated/assertActualIsNotSameJsonAs';
import { assertActualIsNotStartingWith } from './negated/assertActualIsNotStartingWith';
import { assertActualIsNotThrowing } from './negated/assertActualIsNotThrowing';
import { assertActualIsNotThrowingAsync } from './negated/assertActualIsNotThrowingAsync';
import { assertActualIsNotTrue } from './negated/assertActualIsNotTrue';
import { assertActualIsNotTruthy } from './negated/assertActualIsNotTruthy';
import { assertActualIsNotUndefined } from './negated/assertActualIsNotUndefined';
import { assertActualIsNull } from './assertActualIsNull';
import { assertActualIsOfType } from './assertActualIsOfType';
import { assertActualIsSameJsonAs } from './assertActualIsSameJsonAs';
import { assertActualIsStartingWith } from './assertActualIsStartingWith';
import { assertActualIsThrowing } from './assertActualIsThrowing';
import { assertActualIsThrowingAsync } from './assertActualIsThrowingAsync';
import { assertActualIsTrue } from './assertActualIsTrue';
import { assertActualIsTruthy } from './assertActualIsTruthy';
import { assertActualIsUndefined } from './assertActualIsUndefined';
import { CombinedAssertions } from './CombinedAssertions';
import { report } from '../../report';
import { Type } from 'typedescriptor';
import { wrapAssertionForIterable, wrapAsyncAssertionForIterable } from '../../wrapAssertionForIterable';

// This is where type safety goes to die. I hate this file.

const getCombinedAssertions = function <TAny>(actual: TAny): CombinedAssertions<TAny> {
  return {
    anError (): void {
      report(assertActualIsAnError(actual as any));
    },
    anErrorWithMessage (expected: string): void {
      report(assertActualIsAnErrorWithMessage(actual as any, expected));
    },
    atLeast (expected: Map<any, any> | number | Set<any> | object): void {
      report(assertActualIsAtLeast(actual as any, expected));
    },
    atMost (expected: Map<any, any> | number | Set<any> | object): void {
      report(assertActualIsAtMost(actual as any, expected));
    },
    aValue (): void {
      report(assertActualIsAValue(actual as any));
    },
    containing (expected: string): void {
      report(assertActualIsContaining(actual as any, expected));
    },
    containingAllOf (expected: string[]): void {
      report(assertActualIsContainingAllOf(actual as any, expected));
    },
    containingAnyOf (expected: string[]): void {
      report(assertActualIsContainingAnyOf(actual as any, expected));
    },
    empty (): void {
      report(assertActualIsEmpty(actual as any));
    },
    endingWith (expected: string): void {
      report(assertActualIsEndingWithActual(actual as any, expected));
    },
    equalTo (expected: TAny): void {
      report(assertActualIsEqualTo(actual, expected));
    },
    false (): void {
      report(assertActualIsFalse(actual as any));
    },
    falsy (): void {
      report(assertActualIsFalsy(actual as any));
    },
    greaterThan (expected: number): void {
      report(assertActualIsGreaterThan(actual as any, expected));
    },
    identicalTo (expected: TAny): void {
      report(assertActualIsIdenticalTo(actual, expected));
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    instanceOf (expected: Function): void {
      report(assertActualIsInstanceOf(actual as any, expected));
    },
    lessThan (expected: number): void {
      report(assertActualIsLessThan(actual as any, expected));
    },
    matching (expected: RegExp): void {
      report(assertActualIsMatching(actual as any, expected));
    },
    NaN (): void {
      report(assertActualIsNaN(actual as any));
    },
    null (): void {
      report(assertActualIsNull(actual as any));
    },
    ofType (expected: Type | 'result'): void {
      report(assertActualIsOfType(actual as any, expected));
    },
    sameJsonAs (expected: any): void {
      report(assertActualIsSameJsonAs(actual, expected));
    },
    startingWith (expected: string): void {
      report(assertActualIsStartingWith(actual as any, expected));
    },
    throwing (expected?: string | RegExp | ((ex: Error) => boolean)): void {
      report(assertActualIsThrowing(actual as any, expected));
    },
    async throwingAsync (expected?: string | RegExp | ((ex: Error) => boolean)): Promise<void> {
      report(await assertActualIsThrowingAsync(actual as any, expected));
    },
    true (): void {
      report(assertActualIsTrue(actual as any));
    },
    truthy (): void {
      report(assertActualIsTruthy(actual as any));
    },
    undefined (): void {
      report(assertActualIsUndefined(actual as any));
    }
  } as any;
};

const getNegatedCombinedAssertions = function <TAny>(actual: TAny): CombinedAssertions<TAny> {
  return {
    anError (): void {
      report(assertActualIsNotAnError(actual as any));
    },
    anErrorWithMessage (expected: string): void {
      report(assertActualIsNotAnErrorWithMessage(actual as any, expected));
    },
    atLeast (expected: Map<any, any> | number | Set<any> | object): void {
      report(assertActualIsNotAtLeast(actual as any, expected));
    },
    atMost (expected: Map<any, any> | number | Set<any> | object): void {
      report(assertActualIsNotAtMost(actual as any, expected));
    },
    aValue (): void {
      report(assertActualIsNotAValue(actual as any));
    },
    containing (expected: string): void {
      report(assertActualIsNotContaining(actual as any, expected));
    },
    containingAllOf (expected: string[]): void {
      report(assertActualIsNotContainingAllOf(actual as any, expected));
    },
    containingAnyOf (expected: string[]): void {
      report(assertActualIsNotContainingAnyOf(actual as any, expected));
    },
    empty (): void {
      report(assertActualIsNotEmpty(actual as any));
    },
    endingWith (expected: string): void {
      report(assertActualIsNotEndingWithActual(actual as any, expected));
    },
    equalTo (expected: TAny): void {
      report(assertActualIsNotEqualTo(actual, expected));
    },
    false (): void {
      report(assertActualIsNotFalse(actual as any));
    },
    falsy (): void {
      report(assertActualIsNotFalsy(actual as any));
    },
    greaterThan (expected: number): void {
      report(assertActualIsNotGreaterThan(actual as any, expected));
    },
    identicalTo (expected: TAny): void {
      report(assertActualIsNotIdenticalTo(actual, expected));
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    instanceOf (expected: Function): void {
      report(assertActualIsNotInstanceOf(actual as any, expected));
    },
    lessThan (expected: number): void {
      report(assertActualIsNotLessThan(actual as any, expected));
    },
    matching (expected: RegExp): void {
      report(assertActualIsNotMatching(actual as any, expected));
    },
    NaN (): void {
      report(assertActualIsNotNaN(actual as any));
    },
    null (): void {
      report(assertActualIsNotNull(actual as any));
    },
    ofType (expected: Type | 'result'): void {
      report(assertActualIsNotOfType(actual as any, expected));
    },
    sameJsonAs (expected: any): void {
      report(assertActualIsNotSameJsonAs(actual, expected));
    },
    startingWith (expected: string): void {
      report(assertActualIsNotStartingWith(actual as any, expected));
    },
    throwing (expected?: string | RegExp | ((ex: Error) => boolean)): void {
      report(assertActualIsNotThrowing(actual as any, expected));
    },
    async throwingAsync (expected?: string | RegExp | ((ex: Error) => boolean)): Promise<void> {
      report(await assertActualIsNotThrowingAsync(actual as any, expected));
    },
    true (): void {
      report(assertActualIsNotTrue(actual as any));
    },
    truthy (): void {
      report(assertActualIsNotTruthy(actual as any));
    },
    undefined (): void {
      report(assertActualIsNotUndefined(actual as any));
    }
  } as any;
};

const getCombinedAssertionsForEach = function <TAny>(actual: TAny): CombinedAssertions<TAny> {
  return {
    anError (): void {
      report(wrapAssertionForIterable(assertActualIsAnError)(actual as any));
    },
    anErrorWithMessage (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsAnErrorWithMessage)(actual as any, expected));
    },
    atLeast (expected: Map<any, any> | number | Set<any> | object): void {
      report(wrapAssertionForIterable(assertActualIsAtLeast)(actual as any, expected));
    },
    atMost (expected: Map<any, any> | number | Set<any> | object): void {
      report(wrapAssertionForIterable(assertActualIsAtMost)(actual as any, expected));
    },
    aValue (): void {
      report(wrapAssertionForIterable(assertActualIsAValue)(actual as any));
    },
    containing (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsContaining)(actual as any, expected));
    },
    containingAllOf (expected: string[]): void {
      report(wrapAssertionForIterable(assertActualIsContainingAllOf)(actual as any, expected));
    },
    containingAnyOf (expected: string[]): void {
      report(wrapAssertionForIterable(assertActualIsContainingAnyOf)(actual as any, expected));
    },
    empty (): void {
      report(wrapAssertionForIterable(assertActualIsEmpty)(actual as any));
    },
    endingWith (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsEndingWithActual)(actual as any, expected));
    },
    equalTo (expected: TAny): void {
      report(wrapAssertionForIterable(assertActualIsEqualTo)(actual as any, expected));
    },
    false (): void {
      report(wrapAssertionForIterable(assertActualIsFalse)(actual as any));
    },
    falsy (): void {
      report(wrapAssertionForIterable(assertActualIsFalsy)(actual as any));
    },
    greaterThan (expected: number): void {
      report(wrapAssertionForIterable(assertActualIsGreaterThan)(actual as any, expected));
    },
    identicalTo (expected: TAny): void {
      report(wrapAssertionForIterable(assertActualIsIdenticalTo)(actual as any, expected));
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    instanceOf (expected: Function): void {
      report(wrapAssertionForIterable(assertActualIsInstanceOf)(actual as any, expected));
    },
    lessThan (expected: number): void {
      report(wrapAssertionForIterable(assertActualIsLessThan)(actual as any, expected));
    },
    matching (expected: RegExp): void {
      report(wrapAssertionForIterable(assertActualIsMatching)(actual as any, expected));
    },
    NaN (): void {
      report(wrapAssertionForIterable(assertActualIsNaN)(actual as any));
    },
    null (): void {
      report(wrapAssertionForIterable(assertActualIsNull)(actual as any));
    },
    ofType (expected: Type | 'result'): void {
      report(wrapAssertionForIterable(assertActualIsOfType)(actual as any, expected));
    },
    sameJsonAs (expected: any): void {
      report(wrapAssertionForIterable(assertActualIsSameJsonAs)(actual as any, expected));
    },
    startingWith (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsStartingWith)(actual as any, expected));
    },
    throwing (expected?: string | RegExp | ((ex: Error) => boolean)): void {
      report(wrapAssertionForIterable(assertActualIsThrowing)(actual as any, expected));
    },
    async throwingAsync (expected?: string | RegExp | ((ex: Error) => boolean)): Promise<void> {
      report(await wrapAsyncAssertionForIterable(assertActualIsThrowingAsync)(actual as any, expected));
    },
    true (): void {
      report(wrapAssertionForIterable(assertActualIsTrue)(actual as any));
    },
    truthy (): void {
      report(wrapAssertionForIterable(assertActualIsTruthy)(actual as any));
    },
    undefined (): void {
      report(wrapAssertionForIterable(assertActualIsUndefined)(actual as any));
    }
  } as any;
};

const getNegatedCombinedAssertionsForEach = function <TAny>(actual: TAny): CombinedAssertions<TAny> {
  return {
    anError (): void {
      report(wrapAssertionForIterable(assertActualIsNotAnError)(actual as any));
    },
    anErrorWithMessage (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsNotAnErrorWithMessage)(actual as any, expected));
    },
    atLeast (expected: Map<any, any> | number | Set<any> | object): void {
      report(wrapAssertionForIterable(assertActualIsNotAtLeast)(actual as any, expected));
    },
    atMost (expected: Map<any, any> | number | Set<any> | object): void {
      report(wrapAssertionForIterable(assertActualIsNotAtMost)(actual as any, expected));
    },
    aValue (): void {
      report(wrapAssertionForIterable(assertActualIsNotAValue)(actual as any));
    },
    containing (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsNotContaining)(actual as any, expected));
    },
    containingAllOf (expected: string[]): void {
      report(wrapAssertionForIterable(assertActualIsNotContainingAllOf)(actual as any, expected));
    },
    containingAnyOf (expected: string[]): void {
      report(wrapAssertionForIterable(assertActualIsNotContainingAnyOf)(actual as any, expected));
    },
    empty (): void {
      report(wrapAssertionForIterable(assertActualIsNotEmpty)(actual as any));
    },
    endingWith (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsNotEndingWithActual)(actual as any, expected));
    },
    equalTo (expected: TAny): void {
      report(wrapAssertionForIterable(assertActualIsNotEqualTo)(actual as any, expected));
    },
    false (): void {
      report(wrapAssertionForIterable(assertActualIsNotFalse)(actual as any));
    },
    falsy (): void {
      report(wrapAssertionForIterable(assertActualIsNotFalsy)(actual as any));
    },
    greaterThan (expected: number): void {
      report(wrapAssertionForIterable(assertActualIsNotGreaterThan)(actual as any, expected));
    },
    identicalTo (expected: TAny): void {
      report(wrapAssertionForIterable(assertActualIsNotIdenticalTo)(actual as any, expected));
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    instanceOf (expected: Function): void {
      report(wrapAssertionForIterable(assertActualIsNotInstanceOf)(actual as any, expected));
    },
    lessThan (expected: number): void {
      report(wrapAssertionForIterable(assertActualIsNotLessThan)(actual as any, expected));
    },
    matching (expected: RegExp): void {
      report(wrapAssertionForIterable(assertActualIsNotMatching)(actual as any, expected));
    },
    NaN (): void {
      report(wrapAssertionForIterable(assertActualIsNotNaN)(actual as any));
    },
    null (): void {
      report(wrapAssertionForIterable(assertActualIsNotNull)(actual as any));
    },
    ofType (expected: Type | 'result'): void {
      report(wrapAssertionForIterable(assertActualIsNotOfType)(actual as any, expected));
    },
    sameJsonAs (expected: any): void {
      report(wrapAssertionForIterable(assertActualIsNotSameJsonAs)(actual as any, expected));
    },
    startingWith (expected: string): void {
      report(wrapAssertionForIterable(assertActualIsNotStartingWith)(actual as any, expected));
    },
    throwing (expected?: string | RegExp | ((ex: Error) => boolean)): void {
      report(wrapAssertionForIterable(assertActualIsNotThrowing)(actual as any, expected));
    },
    async throwingAsync (expected?: string | RegExp | ((ex: Error) => boolean)): Promise<void> {
      report(await wrapAsyncAssertionForIterable(assertActualIsNotThrowingAsync)(actual as any, expected));
    },
    true (): void {
      report(wrapAssertionForIterable(assertActualIsNotTrue)(actual as any));
    },
    truthy (): void {
      report(wrapAssertionForIterable(assertActualIsNotTruthy)(actual as any));
    },
    undefined (): void {
      report(wrapAssertionForIterable(assertActualIsNotUndefined)(actual as any));
    }
  } as any;
};

export {
  getCombinedAssertions,
  getNegatedCombinedAssertions,
  getCombinedAssertionsForEach,
  getNegatedCombinedAssertionsForEach
};
