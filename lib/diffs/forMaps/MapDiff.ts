import { Diff } from '../Diff';

const mapDiffSymbol: unique symbol = Symbol('map diff');

const mapDiff = function (
  parameters: Omit<MapDiff, 'kind'>
): MapDiff {
  return {
    kind: mapDiffSymbol,
    ...parameters
  };
};

interface MapDiff extends Diff {
  kind: typeof mapDiffSymbol;
  additions: Map<any, any>;
  omissions: Map<any, any>;
  changes: Map<any, any>;
  equal: Map<any, any>;
}

const isMapDiff = function (diff: any): diff is MapDiff {
  return 'kind' in diff && diff.kind === mapDiffSymbol;
};

export type {
  MapDiff
};

export {
  isMapDiff,
  mapDiff
};
