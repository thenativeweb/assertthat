import { sum } from '../../utils/sum';
import { setDiff, SetDiff } from './SetDiff';

const findSetDiffAdditions = function (diff: SetDiff): SetDiff {
  const keptAdditionsCost = sum(
    [ ...diff.additions.values() ].
      map((addition): number => addition.cost)
  );

  return setDiff({
    cost: keptAdditionsCost,
    additions: diff.additions,
    omissions: new Set(),
    equal: new Set()
  });
};

export {
  findSetDiffAdditions
};
