import { makeErrorLessShitty } from '../../types/LessShittyError';
import { prettyPrint } from '../typeAware/prettyPrint';

const prettyPrintError = function (error: Error, depth = 0): string {
  const lessShittyError = makeErrorLessShitty({
    error
  });

  return `Error(${prettyPrint(lessShittyError, depth)})`;
};

export {
  prettyPrintError
};
