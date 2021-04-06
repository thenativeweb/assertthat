// eslint-disable-next-line @typescript-eslint/ban-types
const equalTo = function (actual: Function, expected: Function): boolean {
  return actual.toString() === expected.toString();
};

export {
  equalTo
};
