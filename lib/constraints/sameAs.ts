import { compare } from 'comparejs';
import { fail } from '../fail';

const sameAs = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (compare.identity(actual, expected)) {
      return;
    }

    fail('Expected %s to be same as %s.', [ actual, expected ]);
  };
};

sameAs.negated = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (!compare.identity(actual, expected)) {
      return;
    }

    fail('Expected %s not to be same as %s.', [ actual, expected ]);
  };
};

export { sameAs };
