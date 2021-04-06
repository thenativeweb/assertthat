const containsAnyOf = function (actual: string, expected: Iterable<string>): boolean {
  for (const potentialSubString of expected) {
    if (actual.includes(potentialSubString)) {
      return true;
    }
  }

  return false;
};

export {
  containsAnyOf
};
