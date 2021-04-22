import { assertMapIsAtLeastMap } from './assertMapIsAtLeastMap';
import { assertMapIsAtMostMap } from './assertMapIsAtMostMap';
import { assertMapIsEmpty } from './assertMapIsEmpty';
import { assertMapIsNotAtLeastMap } from './assertMapIsNotAtLeastMap';
import { assertMapIsNotAtMostMap } from './assertMapIsNotAtMostMap';
import { assertMapIsNotEmpty } from './assertMapIsNotEmpty';
import { MapAssertions } from './MapAssertions';
import { report } from '../../report';

const getAssertionsForMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>
): MapAssertions<TKey, TValue> {
  return {
    atLeast (expected): void {
      report(assertMapIsAtLeastMap(actual, expected));
    },
    atMost (expected): void {
      report(assertMapIsAtMostMap(actual, expected));
    },
    empty (): void {
      report(assertMapIsEmpty(actual));
    }
  };
};

const getNegatedAssertionsForMap = function <TKey, TValue>(
  actual: Map<TKey, TValue>
): MapAssertions<TKey, TValue> {
  return {
    atLeast (expected): void {
      report(assertMapIsNotAtLeastMap(actual, expected));
    },
    atMost (expected): void {
      report(assertMapIsNotAtMostMap(actual, expected));
    },
    empty (): void {
      report(assertMapIsNotEmpty(actual));
    }
  };
};

export {
  getAssertionsForMap,
  getNegatedAssertionsForMap
};
