import { ArrayAssertions } from './ArrayAssertions';
import { assertArrayIsContainingAllOfIterable } from './assertArrayIsContainingAllOfIterable';
import { assertArrayIsContainingAnyOfIterable } from './assertArrayIsContainingAnyOfIterable';
import { assertArrayIsContainingItem } from './assertArrayIsContainingItem';
import { assertArrayIsEmpty } from './assertArrayIsEmpty';
import { assertArrayIsNotContainingAllOfIterable } from './assertArrayIsNotContainingAllOfIterable';
import { assertArrayIsNotContainingAnyOfIterable } from './assertArrayIsNotContainingAnyOfIterable';
import { assertArrayIsNotContainingItem } from './assertArrayIsNotContainingItem';
import { assertArrayIsNotEmpty } from './assertArrayIsNotEmpty';
import { report } from '../../report';

const getAssertionsForArray = function <TContent>(actual: TContent[]): ArrayAssertions<TContent> {
  return {
    containing (item: TContent): void {
      report(assertArrayIsContainingItem(actual, item));
    },
    containingAllOf (iterable: Iterable<TContent>): void {
      report(assertArrayIsContainingAllOfIterable(actual, iterable));
    },
    containingAnyOf (iterable: Iterable<TContent>): void {
      report(assertArrayIsContainingAnyOfIterable(actual, iterable));
    },
    empty (): void {
      report(assertArrayIsEmpty(actual));
    }
  };
};

const getNegatedAssertionsForArray = function <TContent>(actual: TContent[]): ArrayAssertions<TContent> {
  return {
    containing (item: TContent): void {
      report(assertArrayIsNotContainingItem(actual, item));
    },
    containingAllOf (iterable: Iterable<TContent>): void {
      report(assertArrayIsNotContainingAllOfIterable(actual, iterable));
    },
    containingAnyOf (iterable: Iterable<TContent>): void {
      report(assertArrayIsNotContainingAnyOfIterable(actual, iterable));
    },
    empty (): void {
      report(assertArrayIsNotEmpty(actual));
    }
  };
};

export {
  getAssertionsForArray,
  getNegatedAssertionsForArray
};
