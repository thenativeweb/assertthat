import { compare } from 'comparejs';
import { fail } from '../fail';

const between = function (actual: any): (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void {
  return function (expectedLower, expectedUpper): void {
    if (
      compare.greaterThanOrEqual(actual, expectedLower) &&
      compare.lessThanOrEqual(actual, expectedUpper)
    ) {
      return;
    }

    fail('Expected %s to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

between.negated = function (actual: any): (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void {
  return function (expectedLower, expectedUpper): void {
    if (
      !compare.greaterThanOrEqual(actual, expectedLower) ||
      !compare.lessThanOrEqual(actual, expectedUpper)
    ) {
      return;
    }

    fail('Expected %s not to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

export { between };
