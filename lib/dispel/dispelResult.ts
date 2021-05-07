import { Ancestors } from './Ancestors';
import { dispel } from './dispel';
import { error, Result, value } from 'defekt';
import { recursion, Recursion } from '../types/Recursion';

const dispelResult = function (
  result: Result<any, Error>,
  path = '/',
  ancestors: Ancestors = []
): Result<any, Error> | Recursion {
  for (const ancestor of ancestors) {
    if (result === ancestor.reference) {
      return recursion({
        recursionPath: ancestor.path
      });
    }
  }

  const newAncestors = [
    ...ancestors,
    {
      reference: result,
      path
    }
  ];

  if (result.hasValue()) {
    return value(dispel(result.value, `${path}value/`, newAncestors));
  }

  return error(dispel(result.error, `${path}error/`, newAncestors));
};

export {
  dispelResult
};
