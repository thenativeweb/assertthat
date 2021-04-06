const matches = function (actual: string, expected: RegExp): boolean {
  return expected.test(actual);
};

export {
  matches
};
