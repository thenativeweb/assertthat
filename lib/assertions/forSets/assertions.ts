import { assertSetIsAtLeastSet } from './assertSetIsAtLeastSet';
import { assertSetIsAtMostSet } from './assertSetIsAtMostSet';
import { assertSetIsContainingAllOfIterable } from './assertSetIsContainingAllOfIterable';
import { assertSetIsContainingAnyOfIterable } from './assertSetIsContainingAnyOfIterable';
import { assertSetIsContainingItem } from './assertSetIsContainingItem';
import { assertSetIsNotAtLeastSet } from './assertSetIsNotAtLeastSet';
import { assertSetIsNotAtMostSet } from './assertSetIsNotAtMostSet';
import { assertSetIsNotContainingAllOfIterable } from './assertSetIsNotContainingAllOfIterable';
import { assertSetIsNotContainingAnyOfIterable } from './assertSetIsNotContainingAnyOfIterable';
import { assertSetIsNotContainingItem } from './assertSetIsNotContainingItem';
import { report } from '../../report';
import { SetAssertions } from './SetAssertions';

const getAssertionsForSet = function <TContent>(actual: Set<TContent>): SetAssertions<TContent> {
  return {
    containing (item): void {
      report(assertSetIsContainingItem(actual, item));
    },
    containingAllOf (iterable): void {
      report(assertSetIsContainingAllOfIterable(actual, iterable));
    },
    containingAnyOf (iterable): void {
      report(assertSetIsContainingAnyOfIterable(actual, iterable));
    },
    atLeast (expected): void {
      report(assertSetIsAtLeastSet(actual, expected));
    },
    atMost (expected): void {
      report(assertSetIsAtMostSet(actual, expected));
    }
  };
};

const getNegatedAssertionsForSet = function <TContent>(actual: Set<TContent>): SetAssertions<TContent> {
  return {
    containing (item): void {
      report(assertSetIsNotContainingItem(actual, item));
    },
    containingAllOf (iterable): void {
      report(assertSetIsNotContainingAllOfIterable(actual, iterable));
    },
    containingAnyOf (iterable): void {
      report(assertSetIsNotContainingAnyOfIterable(actual, iterable));
    },
    atLeast (expected): void {
      report(assertSetIsNotAtLeastSet(actual, expected));
    },
    atMost (expected): void {
      report(assertSetIsNotAtMostSet(actual, expected));
    }
  };
};

export {
  getAssertionsForSet,
  getNegatedAssertionsForSet
};
