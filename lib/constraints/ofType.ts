import fail from '../fail';

const ofType = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected === 'array' || expected === 'object')) {
      return;
    }

    /* eslint-disable valid-typeof */
    if (typeof actual === expected) {
      return;
    }
    /* eslint-enable valid-typeof */

    fail('Expected %s to be of type %s.', [ actual, expected ]);
  };
};

ofType.negated = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected !== 'array' && expected !== 'object')) {
      return;
    }

    /* eslint-disable valid-typeof */
    if (typeof actual !== expected) {
      return;
    }
    /* eslint-enable valid-typeof */

    fail('Expected %s not to be of type %s.', [ actual, expected ]);
  };
};

export default ofType;
