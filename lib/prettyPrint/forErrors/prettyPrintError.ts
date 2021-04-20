import { prettyPrint } from '../typeAware/prettyPrint';

const prettyPrintError = function (error: Error, depth = 0): string {
  const errorButWithoutTheShittiness = {
    ...error,
    message: error.message,
    stack: error.stack
  };

  return `Error(${prettyPrint(errorButWithoutTheShittiness, depth)})`;
};

export {
  prettyPrintError
};
