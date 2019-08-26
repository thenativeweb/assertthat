import cmp from 'comparejs';
import fail from '../fail';

const atLeast = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at least %s.', [ actual, expected ]);
  };
};

atLeast.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s not to be at least %s.', [ actual, expected ]);
  };
};

export default atLeast;
