import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { makeErrorLessShitty } from '../types/LessShittyError';
import { recursion, Recursion } from '../types/Recursion';

const dispelError = function <TError extends Error>(
  value: TError,
  path = '/',
  ancestors: Ancestors = []
): TError | Recursion {
  for (const ancestor of ancestors) {
    if (value === ancestor.reference) {
      return recursion({
        recursionPath: ancestor.path
      });
    }
  }

  const lessShittyError = makeErrorLessShitty({
    error: value
  });

  const newAncestors = [
    ...ancestors,
    {
      reference: value,
      path
    }
  ];

  const dispelledError = Object.create(value);

  for (const [ key, property ] of Object.entries(lessShittyError)) {
    dispelledError[key] = dispel(property, `${path}${key}/`, newAncestors);
  }

  return dispelledError;
};

export {
  dispelError
};
