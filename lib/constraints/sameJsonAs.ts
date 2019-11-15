import { compare } from 'comparejs';
import { fail } from '../fail';

const sameJsonAs = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (compare.equal(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s to equal %s.', [ actual, expected ]);
  };
};

sameJsonAs.negated = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (!compare.equal(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s not to equal %s.', [ actual, expected ]);
  };
};

export { sameJsonAs };
