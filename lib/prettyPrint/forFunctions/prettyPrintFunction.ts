// eslint-disable-next-line @typescript-eslint/ban-types
const prettyPrintFunction = function (value: Function): string {
  return `function ${value.name} (...) { ... }`;
};

export {
  prettyPrintFunction
};
