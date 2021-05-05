import { Diff } from './Diff';
import { findArrayDiffOmissions } from './forArrays/findArrayDiffOmissions';
import { findMapDiffOmissions } from './forMaps/findMapDiffOmissions';
import { findObjectDiffOmissions } from './forObjects/findObjectDiffOmissions';
import { findSetDiffOmissions } from './forSets/findSetDiffOmissions';
import { isArrayDiff } from './forArrays/ArrayDiff';
import { isMapDiff } from './forMaps/MapDiff';
import { isObjectDiff } from './forObjects/ObjectDiff';
import { isSetDiff } from './forSets/SetDiff';

const findOmissions = function (diff: Diff): Diff {
  if (isArrayDiff(diff)) {
    return findArrayDiffOmissions(diff);
  }
  if (isObjectDiff(diff)) {
    return findObjectDiffOmissions(diff);
  }
  if (isSetDiff(diff)) {
    return findSetDiffOmissions(diff);
  }
  if (isMapDiff(diff)) {
    return findMapDiffOmissions(diff);
  }

  return diff;
};

export {
  findOmissions
};
