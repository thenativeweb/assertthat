const isSymbol = function (value: any): value is symbol {
  return typeof value === 'symbol';
};

export {
  isSymbol
};
