import { makeErrorLessShitty } from '../../types/LessShittyError';
import { objectSize } from '../forObjects/objectSize';

const errorSize = function <TError extends Error>(value: TError): number {
  const lessShittyError = makeErrorLessShitty({
    error: value
  });

  return objectSize(lessShittyError);
};

export {
  errorSize
};
