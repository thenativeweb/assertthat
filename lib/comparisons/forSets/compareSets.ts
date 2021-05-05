import { compare } from '../typeAware/compare';
import { size } from '../../size/typeAware/size';
import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';
import { setDiff, SetDiff } from '../../diffs/forSets/SetDiff';

const compareSets = function (
  actual: Set<any>,
  expected: Set<any>
): SetDiff | EqualDiff {
  const newDiff = setDiff({
    cost: 0,
    additions: new Set(),
    omissions: new Set(),
    equal: new Set()
  });

  for (const actualSubValue of actual) {
    newDiff.additions.add(actualSubValue);
    newDiff.cost += size(actualSubValue);
  }

  for (const expectedElement of expected) {
    const elementInBothSets = [ ...newDiff.additions ].find(
      (addition): boolean => compare(addition, expectedElement).cost === 0
    );

    if (elementInBothSets !== undefined) {
      newDiff.additions.delete(elementInBothSets);
      newDiff.equal.add(elementInBothSets);
      newDiff.cost -= size(elementInBothSets);
    } else {
      newDiff.omissions.add(expectedElement);
      newDiff.cost += size(expectedElement);
    }
  }

  if (newDiff.cost === 0) {
    return equalDiff({ value: actual });
  }

  return newDiff;
};

export {
  compareSets
};
