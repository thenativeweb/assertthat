import cmp from 'comparejs';
import fail from '../fail';

const atMost = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.lessThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

atMost.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.lessThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

export default atMost;
