const equalTo = function <TContent = any>(
  actual: TContent[],
  expected: TContent[]
): boolean {
  return actual === expected;
};

export {
  equalTo
};
