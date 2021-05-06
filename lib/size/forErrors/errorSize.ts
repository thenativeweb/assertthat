import { objectSize } from '../forObjects/objectSize';

const errorSize = function <TError extends Error>(value: TError): number {
  const errorButWithoutTheShittiness = {
    ...value,
    message: value.message
  };

  return objectSize(errorButWithoutTheShittiness);
};

export {
  errorSize
};
