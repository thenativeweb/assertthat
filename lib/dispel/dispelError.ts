import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { recursion, Recursion } from '../types/Recursion';

const dispelError = function (
  value: Error,
  path = '/',
  ancestors: Ancestors = []
): Error | Recursion {
  for (const ancestor of ancestors) {
    if (value === ancestor.reference) {
      return recursion({
        recursionPath: ancestor.path
      });
    }
  }

  const errorButWithoutTheShittiness = {
    ...value,
    message: value.message
  };

  const newAncestors = [
    ...ancestors,
    {
      reference: value,
      path
    }
  ];

  const dispelledError = Object.create(value);

  for (const [ key, property ] of Object.entries(errorButWithoutTheShittiness)) {
    dispelledError[key] = dispel(property, `${path}${key}/`, newAncestors);
  }

  return dispelledError;
};

export {
  dispelError
};
