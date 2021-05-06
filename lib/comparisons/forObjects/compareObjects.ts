import { compare } from '../typeAware/compare';
import { size } from '../../size/typeAware/size';
import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';
import { objectDiff, ObjectDiff } from '../../diffs/forObjects/ObjectDiff';

const compareObjects = function (
  actual: any,
  expected: any
): ObjectDiff | EqualDiff {
  const newDiff = objectDiff({
    cost: 0,
    additions: {},
    omissions: {},
    changes: {},
    equal: {}
  });

  for (const key of Object.keys(actual)) {
    if (key in expected) {
      const subDiff = compare(actual[key], expected[key]);

      if (subDiff.cost === 0) {
        newDiff.equal[key] = actual[key];
      } else {
        newDiff.changes[key] = subDiff;
        newDiff.cost += subDiff.cost;
      }
    } else {
      newDiff.additions[key] = actual[key];
      newDiff.cost += size(actual[key]);
    }
  }

  for (const key of Object.keys(expected)) {
    if (key in actual) {
      continue;
    }

    newDiff.omissions[key] = expected[key];
    newDiff.cost += size(expected[key]);
  }

  if (newDiff.cost === 0) {
    return equalDiff({ value: actual });
  }

  return newDiff;
};

export {
  compareObjects
};
