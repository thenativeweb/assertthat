import { errorSize } from '../forErrors/errorSize';
import { Result } from 'defekt';
import { size } from '../typeAware/size';

const resultSize = function <TValue, TError extends Error>(value: Result<TValue, TError>): number {
  if (value.hasValue()) {
    return size(value.value);
  }

  return errorSize(value.error);
};

export {
  resultSize
};
