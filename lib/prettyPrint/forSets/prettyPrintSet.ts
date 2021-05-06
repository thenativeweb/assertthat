import { prettyPrintArray } from '../forArrays/prettyPrintArray';

const prettyPrintSet = function (value: Set<any>, depth = 0): string {
  const prettyPrintedArray = prettyPrintArray([ ...value ], depth);

  return `Set(${prettyPrintedArray})`;
};

export {
  prettyPrintSet
};
