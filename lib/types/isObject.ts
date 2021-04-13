const isObject = function (value: any): value is object {
  return typeof value === 'object';
};

export {
  isObject
};
