import { Diff } from '../Diff';
import { findAdditions } from '../findAdditions';
import { sum } from '../../utils/sum';
import { objectDiff, ObjectDiff } from './ObjectDiff';

const findObjectDiffAdditions = function (diff: ObjectDiff): ObjectDiff {
  const filteredChanges = Object.fromEntries(
    Object.entries(diff.changes).
      map(
        ([ key, change ]): [string, Diff] => [ key, findAdditions(change) ]
      ).
      filter(([ , change ]): boolean => change.cost > 0)
  );

  const keptAdditionsCost = sum(
    Object.values(diff.additions).
      map((addition): number => addition.cost)
  );
  const keptChangesCost = sum(
    Object.values(filteredChanges).
      map((change): number => change.cost)
  );

  return objectDiff({
    cost: keptAdditionsCost + keptChangesCost,
    additions: diff.additions,
    changes: filteredChanges,
    omissions: {},
    equal: {}
  });
};

export {
  findObjectDiffAdditions
};
