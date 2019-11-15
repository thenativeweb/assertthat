import { compare } from 'comparejs';
import { fail } from '../fail';

const atMost = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (compare.lessThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

atMost.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (!compare.lessThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

export { atMost };
