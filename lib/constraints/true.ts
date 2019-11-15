import { compare } from 'comparejs';
import { fail } from '../fail';

const isTrue = function (actual: any): () => void {
  return function (): void {
    if (compare.equal(actual, true)) {
      return;
    }

    fail('Expected %s to be true.', [ actual ]);
  };
};

isTrue.negated = function (actual: any): () => void {
  return function (): void {
    if (!compare.equal(actual, true)) {
      return;
    }

    fail('Expected %s not to be true.', [ actual ]);
  };
};

export { isTrue };
