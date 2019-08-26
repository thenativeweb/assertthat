import cmp from 'comparejs';

import fail from '../fail';

const isNull = function (actual: any): () => void {
  return function (): void {
    if (cmp.equal(actual, null)) {
      return;
    }

    fail('Expected %s to be null.', [ actual ]);
  };
};

isNull.negated = function (actual: any): () => void {
  return function (): void {
    if (!cmp.equal(actual, null)) {
      return;
    }

    fail('Expected %s not to be null.', [ actual ]);
  };
};

export default isNull;
