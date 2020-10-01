import { compare } from 'comparejs';
import { fail } from '../fail';

const lessThan = function (actual: any): (expected: number | [] | Record<string, unknown>) => void {
  return function (expected): void {
    if (compare.lessThan(actual, expected)) {
      return;
    }

    fail('Expected %s to be less than %s.', [ actual, expected ]);
  };
};

lessThan.negated = function (actual: any): (expected: number | [] | Record<string, unknown>) => void {
  return function (expected): void {
    if (!compare.lessThan(actual, expected)) {
      return;
    }

    fail('Expected %s not to be less than %s.', [ actual, expected ]);
  };
};

export { lessThan };
