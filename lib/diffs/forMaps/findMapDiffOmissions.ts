import { Diff } from '../Diff';
import { findOmissions } from '../findOmissions';
import { size } from '../../size/typeAware/size';
import { sum } from '../../utils/sum';
import { mapDiff, MapDiff } from './MapDiff';

const findMapDiffOmissions = function (diff: MapDiff): MapDiff {
  const filteredChanges = new Map(
    [ ...diff.changes.entries() ].
      map(
        ([ key, change ]): [string, Diff] => [ key, findOmissions(change) ]
      ).
      filter(([ , change ]): boolean => change.cost > 0)
  );

  const keptOmissionsCost = sum(
    [ ...diff.omissions.values() ].
      map((omission): number => size(omission))
  );
  const keptChangesCost = sum(
    [ ...filteredChanges.values() ].
      map((change): number => change.cost)
  );

  return mapDiff({
    cost: keptOmissionsCost + keptChangesCost,
    omissions: diff.omissions,
    changes: filteredChanges,
    additions: new Map(),
    equal: new Map()
  });
};

export {
  findMapDiffOmissions
};
