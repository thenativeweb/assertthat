import { compare } from 'comparejs';
import { fail } from '../fail';

const isUndefined = function (actual: any): () => void {
  return function (): void {
    if (compare.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s to be undefined.', [ actual ]);
  };
};

isUndefined.negated = function (actual: any): () => void {
  return function (): void {
    if (!compare.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be undefined.', [ actual ]);
  };
};

export { isUndefined };
