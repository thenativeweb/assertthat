const isUndefined = function (value: any): value is undefined {
  return typeof value === 'undefined';
};

export {
  isUndefined
};
