const containsAllOf = function (actual: string, expected: Iterable<string>): boolean {
  for (const potentialSubString of expected) {
    if (!actual.includes(potentialSubString)) {
      return false;
    }
  }

  return true;
};

export {
  containsAllOf
};
