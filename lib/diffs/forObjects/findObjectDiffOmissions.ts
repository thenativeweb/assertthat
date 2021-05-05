import { Diff } from '../Diff';
import { findOmissions } from '../findOmissions';
import { objectMissingPropertyCost } from '../../constants/costs';
import { sum } from '../../utils/sum';
import { objectDiff, ObjectDiff } from './ObjectDiff';

const findObjectDiffOmissions = function (diff: ObjectDiff): ObjectDiff {
  const filteredChanges = Object.fromEntries(
    Object.entries(diff.changes).
      map(
        ([ key, change ]): [string, Diff] => [ key, findOmissions(change) ]
      ).
      filter(([ , change ]): boolean => change.cost > 0)
  );

  const keptOmissionsCost = sum(
    Object.values(diff.omissions).
      map((): number => objectMissingPropertyCost)
  );
  const keptChangesCost = sum(
    Object.values(filteredChanges).
      map((change): number => change.cost)
  );

  return objectDiff({
    cost: keptOmissionsCost + keptChangesCost,
    omissions: diff.omissions,
    changes: filteredChanges,
    additions: {},
    equal: {}
  });
};

export {
  findObjectDiffOmissions
};
