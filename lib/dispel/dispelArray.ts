import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { Recursion, recursion } from '../types/Recursion';

const dispelArray = function (
  value: any[],
  path = '/',
  ancestors: Ancestors = []
): any[] | Recursion {
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

  const dispelledArray = value.map(
    (subValue, index): any =>
      dispel(subValue, `${path}${index}/`, newAncestors)
  );

  return dispelledArray;
};

export {
  dispelArray
};
