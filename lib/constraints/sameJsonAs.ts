import cmp from 'comparejs';

import fail from '../fail';

const sameJsonAs = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.equal(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s to equal %s.', [ actual, expected ]);
  };
};

sameJsonAs.negated = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.equal(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s not to equal %s.', [ actual, expected ]);
  };
};

export default sameJsonAs;
