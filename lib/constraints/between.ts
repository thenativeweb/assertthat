import cmp from 'comparejs';
import fail from '../fail';

const between = function (actual: any): (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void {
  return function (expectedLower, expectedUpper): void {
    if (
      cmp.greaterThanOrEqual(actual, expectedLower) &&
      cmp.lessThanOrEqual(actual, expectedUpper)
    ) {
      return;
    }

    fail('Expected %s to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

between.negated = function (actual: any): (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void {
  return function (expectedLower, expectedUpper): void {
    if (
      !cmp.greaterThanOrEqual(actual, expectedLower) ||
      !cmp.lessThanOrEqual(actual, expectedUpper)
    ) {
      return;
    }

    fail('Expected %s not to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

export default between;
