import { undefinedDiff, UndefinedDiff } from '../../diffs/forUndefined/UndefinedDiff';

const compareUndefined = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  actual: undefined,
  expected: undefined
  /* eslint-enable @typescript-eslint/no-unused-vars */
): UndefinedDiff {
  return undefinedDiff();
};

export {
  compareUndefined
};
