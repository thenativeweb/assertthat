import cmp from 'comparejs';

import fail from '../fail';

const between = function (actual: any): (expectedLower: number | [] | {}, expectedUpper: number | [] | {}) => void {
  return function (expectedLower, expectedUpper): void {
    if (arguments.length === 0) {
      throw new Error('Expected lower bound is missing.');
    }
    if (arguments.length === 1) {
      throw new Error('Expected upper bound is missing.');
    }

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
    if (arguments.length === 0) {
      throw new Error('Expected lower bound is missing.');
    }
    if (arguments.length === 1) {
      throw new Error('Expected upper bound is missing.');
    }

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
