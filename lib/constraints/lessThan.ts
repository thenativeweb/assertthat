import cmp from 'comparejs';
import fail from '../fail';

const lessThan = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (cmp.lessThan(actual, expected)) {
      return;
    }

    fail('Expected %s to be less than %s.', [ actual, expected ]);
  };
};

lessThan.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (!cmp.lessThan(actual, expected)) {
      return;
    }

    fail('Expected %s not to be less than %s.', [ actual, expected ]);
  };
};

export default lessThan;
