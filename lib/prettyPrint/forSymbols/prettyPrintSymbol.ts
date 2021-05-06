const prettyPrintSymbol = function (value: symbol): string {
  return `Symbol("${value.description}")`;
};

export {
  prettyPrintSymbol
};
