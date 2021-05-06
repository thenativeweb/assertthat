import { assertStringIsContainingAllOfIterable } from './assertStringIsContainingAllOfIterable';
import { assertStringIsContainingAnyOfIterable } from './assertStringIsContainingAnyOfIterable';
import { assertStringIsContainingString } from './assertStringIsContainingString';
import { assertStringIsEmpty } from './assertStringIsEmpty';
import { assertStringIsEndingWithString } from './assertStringIsEndingWithString';
import { assertStringIsMatchingRegExp } from './assertStringIsMatchingRegExp';
import { assertStringIsNotContainingAllOfIterable } from './assertStringIsNotContainingAllOfIterable';
import { assertStringIsNotContainingAnyOfIterable } from './assertStringIsNotContainingAnyOfIterable';
import { assertStringIsNotContainingString } from './assertStringIsNotContainingString';
import { assertStringIsNotEmpty } from './assertStringIsNotEmpty';
import { assertStringIsNotEndingWithString } from './assertStringIsNotEndingWithString';
import { assertStringIsNotMatchingRegExp } from './assertStringIsNotMatchingRegExp';
import { assertStringIsNotStartingWithString } from './assertStringIsNotStartingWithString';
import { assertStringIsStartingWithString } from './assertStringIsStartingWithString';
import { report } from '../../report';
import { StringAssertions } from './StringAssertions';

const getAssertionsForString = function (actual: string): StringAssertions {
  return {
    containing (expected): void {
      report(assertStringIsContainingString(actual, expected));
    },
    startingWith (expected): void {
      report(assertStringIsStartingWithString(actual, expected));
    },
    endingWith (expected): void {
      report(assertStringIsEndingWithString(actual, expected));
    },
    containingAllOf (expected): void {
      report(assertStringIsContainingAllOfIterable(actual, expected));
    },
    containingAnyOf (expected): void {
      report(assertStringIsContainingAnyOfIterable(actual, expected));
    },
    empty (): void {
      report(assertStringIsEmpty(actual));
    },
    matching (expected: RegExp): void {
      report(assertStringIsMatchingRegExp(actual, expected));
    }
  };
};

const getNegatedAssertionsForString = function (actual: string): StringAssertions {
  return {
    containing (expected): void {
      report(assertStringIsNotContainingString(actual, expected));
    },
    startingWith (expected): void {
      report(assertStringIsNotStartingWithString(actual, expected));
    },
    endingWith (expected): void {
      report(assertStringIsNotEndingWithString(actual, expected));
    },
    containingAllOf (expected): void {
      report(assertStringIsNotContainingAllOfIterable(actual, expected));
    },
    containingAnyOf (expected): void {
      report(assertStringIsNotContainingAnyOfIterable(actual, expected));
    },
    empty (): void {
      report(assertStringIsNotEmpty(actual));
    },
    matching (expected: RegExp): void {
      report(assertStringIsNotMatchingRegExp(actual, expected));
    }
  };
};

export {
  getAssertionsForString,
  getNegatedAssertionsForString
};
