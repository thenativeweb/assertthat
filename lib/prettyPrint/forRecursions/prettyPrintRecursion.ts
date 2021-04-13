import { Recursion } from '../../types/Recursion';

const prettyPrintRecursion = function (recursion: Recursion): string {
  return `Recursion("${recursion.recursionPath}")`;
};

export {
  prettyPrintRecursion
};
