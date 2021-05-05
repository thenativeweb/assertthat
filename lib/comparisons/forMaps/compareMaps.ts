import { compare } from '../typeAware/compare';
import { size } from '../../size/typeAware/size';
import { equalDiff, EqualDiff, isEqualDiff } from '../../diffs/EqualDiff';
import { mapDiff, MapDiff } from '../../diffs/forMaps/MapDiff';

const compareMaps = function (
  actual: Map<any, any>,
  expected: Map<any, any>
): MapDiff | EqualDiff {
  const newDiff = mapDiff({
    cost: 0,
    additions: new Map(),
    omissions: new Map(),
    changes: new Map(),
    equal: new Map()
  });

  for (const [ actualKey, actualElement ] of actual.entries()) {
    newDiff.additions.set(actualKey, actualElement);
    newDiff.cost += size(actualElement);
  }

  for (const [ expectedKey, expectedElement ] of expected.entries()) {
    const actualKeyInBothMaps = [ ...newDiff.additions.keys() ].find(
      (actualKey): boolean => compare(actualKey, expectedKey).cost === 0
    );

    if (actualKeyInBothMaps !== undefined) {
      newDiff.additions.delete(actualKeyInBothMaps);
      newDiff.cost -= size(actual.get(actualKeyInBothMaps));

      const subDiff = compare(actual.get(actualKeyInBothMaps), expectedElement);

      if (isEqualDiff(subDiff)) {
        newDiff.equal.set(actualKeyInBothMaps, expectedElement);
      } else {
        newDiff.changes.set(actualKeyInBothMaps, subDiff);
        newDiff.cost += subDiff.cost;
      }
    } else {
      newDiff.omissions.set(expectedKey, expectedElement);
      newDiff.cost += size(expectedElement);
    }
  }

  if (newDiff.cost === 0) {
    return equalDiff({ value: actual });
  }

  return newDiff;
};

export {
  compareMaps
};
