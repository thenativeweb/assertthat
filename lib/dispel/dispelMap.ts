import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { isScalar } from '../types/isScalar';
import { v4 } from 'uuid';
import { Recursion, recursion } from '../types/Recursion';

const dispelMap = function (
  value: Map<any, any>,
  path = '/',
  ancestors: Ancestors = []
): Map<any, any> | Recursion {
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

  const dispelledMap: Map<any, any> = new Map();

  for (const [ key, subValue ] of value.entries()) {
    const newPath = isScalar(key) ? `${path}map-${String(key)}/` : `${path}map-${v4()}/`;

    dispelledMap.set(key, dispel(subValue, newPath, newAncestors));
  }

  return dispelledMap;
};

export {
  dispelMap
};
