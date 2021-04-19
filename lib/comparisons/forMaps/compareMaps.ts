import { compare } from '../typeAware/compare';
import { mapMissingKeyCost } from '../../constants/costs';
import { mapDiff, MapDiff } from '../../diffs/forMaps/MapDiff';

const compareMaps = function (
  actual: Map<any, any>,
  expected: Map<any, any>
): MapDiff {
  const newDiff = mapDiff({
    cost: 0,
    additions: new Map(),
    omissions: new Map(),
    changes: new Map(),
    equal: new Map()
  });

  for (const [ actualKey, actualValue ] of actual.entries()) {
    newDiff.additions.set(actualKey, actualValue);
    newDiff.cost += mapMissingKeyCost;
  }

  for (const [ expectedKey, expectedElement ] of expected.entries()) {
    const keyInBothMaps = [ ...newDiff.additions.keys() ].find(
      (actualKey): boolean => compare(actualKey, expectedKey).cost === 0
    );

    if (keyInBothMaps !== undefined) {
      newDiff.additions.delete(keyInBothMaps);
      newDiff.equal.set(keyInBothMaps, expectedElement);
      newDiff.cost -= mapMissingKeyCost;
    } else {
      newDiff.omissions.set(expectedKey, expectedElement);
      newDiff.cost += mapMissingKeyCost;
    }
  }

  return newDiff;
};

export {
  compareMaps
};
