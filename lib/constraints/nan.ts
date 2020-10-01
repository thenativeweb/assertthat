import { fail } from '../fail';

const isNan = function (actual: any): () => void {
  return function (): void {
    if (typeof actual === 'number' && Number.isNaN(actual)) {
      return;
    }

    fail('Expected %s to be NaN.', [ actual ]);
  };
};

isNan.negated = function (actual: any): () => void {
  return function (): void {
    if (!(typeof actual === 'number') || !Number.isNaN(actual)) {
      return;
    }

    fail('Expected %s not to be NaN.', [ actual ]);
  };
};

export { isNan };
