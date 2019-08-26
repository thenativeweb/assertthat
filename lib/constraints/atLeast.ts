import cmp from 'comparejs';
import fail from '../fail';

const atLeast = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (cmp.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at least %s.', [ actual, expected ]);
  };
};

atLeast.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (!cmp.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s not to be at least %s.', [ actual, expected ]);
  };
};

export default atLeast;
