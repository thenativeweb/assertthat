import { compare } from 'comparejs';
import { fail } from '../fail';

const falsy = function (actual: any): () => void {
  return function (): void {
    if (compare.equal(actual, false) || compare.equal(actual, 0) || compare.equal(actual, '') || compare.equal(actual, null) || compare.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s to be falsy.', [ actual ]);
  };
};

falsy.negated = function (actual: any): () => void {
  return function (): void {
    if (!compare.equal(actual, false) && !compare.equal(actual, 0) && !compare.equal(actual, '') && !compare.equal(actual, null) && !compare.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be falsy.', [ actual ]);
  };
};

export { falsy };
