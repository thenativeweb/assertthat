const isString = function (value: any): value is string {
  return typeof value === 'string';
};

export {
  isString
};
