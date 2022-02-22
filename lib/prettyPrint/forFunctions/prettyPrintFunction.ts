const prettyPrintFunction = function (value: (...args: any[]) => any): string {
  return `function ${value.name} (...) { ... }`;
};

export {
  prettyPrintFunction
};
