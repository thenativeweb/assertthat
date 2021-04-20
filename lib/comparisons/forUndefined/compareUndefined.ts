import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';

const compareUndefined = function (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  actual: undefined,
  expected: undefined
  /* eslint-enable @typescript-eslint/no-unused-vars */
): EqualDiff {
  return equalDiff({ value: undefined });
};

export {
  compareUndefined
};
