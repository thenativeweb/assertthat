import cmp from 'comparejs';
import fail from '../fail';

const greaterThan = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (cmp.greaterThan(actual, expected)) {
      return;
    }

    fail('Expected %s to be greater than %s.', [ actual, expected ]);
  };
};

greaterThan.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (!cmp.greaterThan(actual, expected)) {
      return;
    }

    fail('Expected %s not to be greater than %s.', [ actual, expected ]);
  };
};

export default greaterThan;
