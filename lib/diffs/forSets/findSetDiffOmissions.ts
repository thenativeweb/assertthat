import { sum } from '../../utils/sum';
import { setDiff, SetDiff } from './SetDiff';

const findSetDiffOmissions = function (diff: SetDiff): SetDiff {
  const keptOmissionsCost = sum(
    [ ...diff.omissions.values() ].
      map((omission): number => omission.cost)
  );

  return setDiff({
    cost: keptOmissionsCost,
    omissions: diff.omissions,
    additions: new Set(),
    equal: new Set()
  });
};

export {
  findSetDiffOmissions
};
