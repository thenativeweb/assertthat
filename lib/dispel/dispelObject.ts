import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { Recursion, recursion } from '../types/Recursion';

const dispelObject = function (
  value: object,
  path = '/',
  ancestors: Ancestors = []
): object | Recursion {
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

  const dispelledObject: any = {};

  for (const [ key, subValue ] of Object.entries(value)) {
    dispelledObject[key] = dispel(subValue, `${path}${key}/`, newAncestors);
  }

  return dispelledObject;
};

export {
  dispelObject
};
