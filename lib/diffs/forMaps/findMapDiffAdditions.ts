import { Diff } from '../Diff';
import { findAdditions } from '../findAdditions';
import { sum } from '../../utils/sum';
import { mapDiff, MapDiff } from './MapDiff';

const findMapDiffAdditions = function (diff: MapDiff): MapDiff {
  const filteredChanges = new Map(
    [ ...diff.changes.entries() ].
      map(
        ([ key, change ]): [string, Diff] => [ key, findAdditions(change) ]
      ).
      filter(([ , change ]): boolean => change.cost > 0)
  );

  const keptAdditionsCost = sum(
    [ ...diff.additions.values() ].
      map((addition): number => addition.cost)
  );
  const keptChangesCost = sum(
    [ ...filteredChanges.values() ].
      map((change): number => change.cost)
  );

  return mapDiff({
    cost: keptAdditionsCost + keptChangesCost,
    additions: diff.additions,
    changes: filteredChanges,
    omissions: new Map(),
    equal: new Map()
  });
};

export {
  findMapDiffAdditions
};
