import { Diff } from './Diff';
import { findArrayDiffAdditions } from './forArrays/findArrayDiffAdditions';
import { findMapDiffAdditions } from './forMaps/findMapDiffAdditions';
import { findObjectDiffAdditions } from './forObjects/findObjectDiffAdditions';
import { findSetDiffAdditions } from './forSets/findSetDiffAdditions';
import { isArrayDiff } from './forArrays/ArrayDiff';
import { isMapDiff } from './forMaps/MapDiff';
import { isObjectDiff } from './forObjects/ObjectDiff';
import { isSetDiff } from './forSets/SetDiff';

const findAdditions = function (diff: Diff): Diff {
  if (isArrayDiff(diff)) {
    return findArrayDiffAdditions(diff);
  }
  if (isObjectDiff(diff)) {
    return findObjectDiffAdditions(diff);
  }
  if (isSetDiff(diff)) {
    return findSetDiffAdditions(diff);
  }
  if (isMapDiff(diff)) {
    return findMapDiffAdditions(diff);
  }

  return diff;
};

export {
  findAdditions
};
