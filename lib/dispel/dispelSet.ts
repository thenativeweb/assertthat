import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { v4 } from 'uuid';
import { recursion, Recursion } from '../types/Recursion';

const dispelSet = function (
  value: Set<any>,
  path = '/',
  ancestors: Ancestors = []
): Set<any> | Recursion {
  for (const ancestor of ancestors) {
    if (value === ancestor.reference) {
      return recursion({
        recursionPath: ancestor.path
      });
    }
  }

  const newAncestors = [
    ...ancestors,
    {
      reference: value,
      path
    }
  ];
  const newPath = `${path}set-${v4()}/`;

  const dispelledSet = new Set<any>();

  for (const subValue of value) {
    dispelledSet.add(dispel(subValue, newPath, newAncestors));
  }

  return dispelledSet;
};

export {
  dispelSet
};
