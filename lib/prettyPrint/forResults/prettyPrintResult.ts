import { prettyPrint } from '../typeAware/prettyPrint';
import { Result } from 'defekt';

const prettyPrintResult = function (
  value: Result<any, Error>,
  depth = 0
): string {
  if (value.hasValue()) {
    return `ValueResult(${prettyPrint(value.value, depth + 1)})`;
  }

  return `ErrorResult(${prettyPrint(value.error, depth + 1)})`;
};

export {
  prettyPrintResult
};
