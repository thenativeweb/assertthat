import cmp from 'comparejs';

import fail from '../fail';

const falsy = function (actual: any): () => void {
  return function (): void {
    if (cmp.equal(actual, false) || cmp.equal(actual, 0) || cmp.equal(actual, '') || cmp.equal(actual, null) || cmp.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s to be falsy.', [ actual ]);
  };
};

falsy.negated = function (actual: any): () => void {
  return function (): void {
    if (!cmp.equal(actual, false) && !cmp.equal(actual, 0) && !cmp.equal(actual, '') && !cmp.equal(actual, null) && !cmp.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be falsy.', [ actual ]);
  };
};

export default falsy;
