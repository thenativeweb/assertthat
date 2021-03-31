import { AssertionFailed } from './errors';
import { Result } from 'defekt';

const report = function (result: Result<any, AssertionFailed>): void {
  if (result.hasValue()) {
    return;
  }

  throw result.error;
};

export {
  report
};
