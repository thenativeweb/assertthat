import { compare } from 'comparejs';
import { fail } from '../fail';

const atLeast = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (compare.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s to be at least %s.', [ actual, expected ]);
  };
};

atLeast.negated = function (actual: any): (expected: number | [] | {}) => void {
  return function (expected): void {
    if (!compare.greaterThanOrEqual(actual, expected)) {
      return;
    }

    fail('Expected %s not to be at least %s.', [ actual, expected ]);
  };
};

export { atLeast };
