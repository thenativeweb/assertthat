import cmp from 'comparejs';

import fail from '../fail';

const equalTo = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.equal(actual, expected)) {
      return;
    }

    fail('Expected %s to equal %s.', [ actual, expected ]);
  };
};

equalTo.negated = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.equal(actual, expected)) {
      return;
    }

    fail('Expected %s not to equal %s.', [ actual, expected ]);
  };
};

export default equalTo;
